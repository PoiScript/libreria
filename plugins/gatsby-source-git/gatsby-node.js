const crypto = require('crypto')
const { readdirSync, statSync } = require('fs')
const { join, extname, parse } = require('path')
const simpleGit = require('simple-git')

exports.sourceNodes = async ({ boundActionCreators }, pluginOptions) => {
  const { createNode, createNodeField } = boundActionCreators

  if (!pluginOptions) {
    return
  } else if (!Array.isArray(pluginOptions)) {
    pluginOptions = [pluginOptions]
  }

  for (const opt of pluginOptions) {
    if (opt.repo && opt.content && opt.extension) {
      const fileList = []
      walkSync(opt.content, fileList, opt.extension)
      for (const file of fileList) {
        const node = await getGitInfoNode(opt.repo, file)
        createNode(node)
        createNodeField({
          node,
          name: 'slug',
          value: parse(file).name
        })
      }
    }
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
  const last = await getCommit(repo, { n: 1, ...opt })
  const first = await getCommit(repo, { '--reverse': null, ...opt })

  const content = { last, first, file }
  const contentDigest = crypto.createHash('md5').update(file).digest('hex')

  return {
    id: contentDigest,
    children: [],
    parent: '__SOURCE__',
    content,
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
