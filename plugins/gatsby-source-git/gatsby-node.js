const { EOL } = require('os')
const crypto = require('crypto')
const { join } = require('path')
const simpleGit = require('simple-git')

exports.sourceNodes = async ({ boundActionCreators }, pluginOptions) => {
  const { createNode } = boundActionCreators
  const { path } = pluginOptions

  if (!path) {
    console.error('Path options not set.')
    return
  }

  const git = simpleGit(path)

  // get the git root directory
  git.revparse(['--show-toplevel'], async (err, root) => {
    if (err) {
      console.error('Can\'t find the git root directory.')
      return
    }

    root = root.trim()

    const files = await new Promise((resolve, reject) => {
      git.raw(['ls-files', '--full-name', path], (err, output) => {
        if (err) {
          reject(err)
        } else {
          // get the absolute path
          resolve(output.trim().split(EOL).map(row => join(root, row)))
        }
      })
    })

    for (const file of files) {
      const opt = {
        file,
        format: {
          hash: '%H',
          date: '%ai'
        }
      }

      const digest = crypto.createHash('md5').update(file).digest('hex')

      const commits = await new Promise((resolve, reject) => {
        git.log(opt, (err, commits) => {
          if (err) {
            reject(err)
          } else {
            resolve(commits)
          }
        })
      })

      createNode({
        id: digest,
        children: [],
        parent: '__SOURCE__',
        fileAbsolutePath: file,
        total: commits.total,
        latest: commits.latest,
        internal: {
          type: 'GitInfo',
          contentDigest: digest
        }
      })
    }
  })
}
