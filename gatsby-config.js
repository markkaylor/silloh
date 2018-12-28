module.exports = {
  siteMetadata: {
    title: 'Silloh',
    description: 'This is a store, we sell stuff.'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options:  {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
}
