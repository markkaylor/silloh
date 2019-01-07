var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms`,
  oprtions: {
    cmsConfig: `/static/admin/config.yml`
  }

}
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
    },
    netlifyCmsPaths,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          netlifyCmsPaths,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 920
            }
          },
        ]
      },
    },
    `gatsby-plugin-netlify-cms`,
  ]
}
