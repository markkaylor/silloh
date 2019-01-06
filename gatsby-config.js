module.exports = {
  siteMetadata: {
    title: 'Silloh',
    description: 'This is a store, we sell stuff.'
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options:  {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 400,
      },
    },
  ]
}
