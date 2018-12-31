const path = require('path')

exports.createPages = (({graphql, actions}) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const productPostTemplate = path.resolve('src/templates/product-post.js')

    resolve(
      graphql(
        `
        query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
        `
      ).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: productPostTemplate,
            context: {
              pathSlug: node.frontmatter.path
            }
          })
          resolve()
        })
      })
    )
  })
})
