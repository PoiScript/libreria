const { renderToString } = require('katex')

module.exports = {
  mutateSource: ({ markdownNode }) => {
    return new Promise((resolve, reject) => {
      try {
        markdownNode.internal.content = markdownNode.internal.content
          .replace(/\$\$(.*?)\$\$/g, latex => renderToString(latex.slice(2, -2), { displayMode: true }))
          .replace(/\$(.*?)\$/g, latex => renderToString(latex.slice(1, -1)))
        resolve()
      } catch (err) {
        reject(err)
      }
    })
  }
}
