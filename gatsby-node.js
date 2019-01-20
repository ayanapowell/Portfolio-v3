const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const workTemplate = path.resolve('src/templates/work.js')
    resolve(
      graphql(`
        {
          allContentfulWork {
            edges {
              node {
                id
                title
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allContentfulWork.edges.forEach(work => {
          createPage({
            path: work.node.slug,
            component: workTemplate,
            context: {
              slug: work.node.slug,
            },
          })
        })
        return
      })
    )
  })
}
