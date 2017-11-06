const crypto = require('crypto')
const { readdirSync, statSync } = require('fs')
const { join, extname } = require('path')
const simpleGit = require('simple-git')

exports.sourceNodes = async ({ boundActionCreators }, pluginOptions) => {
  const { createNode } = boundActionCreators
  const { path, extension } = pluginOptions

  if (!path || !extension) {
    return
  }

  const fileList = []
  walkSync(path, fileList, extension)

  for (const file of fileList) {
    createNode(await getGitInfoNode(path, file))
  }
}

const walkSync = (dir, fileList, exts) => {
  const files = readdirSync(dir)
  files.forEach(file => {
    const path = join(dir, file)
    if (statSync(path).isDirectory()) {
      fileList = walkSync(path, fileList, exts)
    } else if (exts.includes(extname(path))) {
      fileList.push(path)
    }
  })
  return fileList
}

async function getGitInfoNode (repoPath, file) {
  const opt = {
    format: {
      hash: '%H',
      date: '%ai',
      message: '%s'
    },
    '--': null
  }
  opt[file] = null

  const repo = simpleGit(repoPath)
  const lastCommit = await getCommit(repo, { n: 1, ...opt })
  const firstCommit = await getCommit(repo, { '--reverse': null, ...opt })
  const count = await getCommitCount(repo, file)
  const contentDigest = crypto.createHash('md5').update(file).digest('hex')

  return {
    id: contentDigest,
    children: [],
    parent: '__SOURCE__',
    fileAbsolutePath: file,
    lastCommit,
    firstCommit,
    commitCount: count,
    internal: {
      contentDigest,
      type: 'GitInfo'
    }
  }
}

async function getCommit (repo, opts) {
  return await new Promise((resolve, reject) => {
    repo.log(opts, (err, commits) => {
      if (err) {
        reject(err)
      } else {
        resolve(commits.latest)
      }
    })
  })
}

async function getCommitCount (repo, file) {
  return await new Promise((resolve, reject) => {
    repo.raw(['rev-list', '--count', '--all', '--', file], (err, count) => {
      if (err) {
        reject(err)
      } else {
        resolve(count.trim())
      }
    })
  })
}
