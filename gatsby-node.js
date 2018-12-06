const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const work = path.resolve('./src/templates/work.js')
    resolve(
      graphql(
        `
          {
            allContentfulWork {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const works = result.data.allContentfulWork.edges
        works.forEach((item, index) => {
          createPage({
            path: `/work/${item.node.slug}/`,
            component: work,
            context: {
              slug: item.node.slug,
            },
          })
        })
      })
    )
  })
}
