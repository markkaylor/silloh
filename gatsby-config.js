var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  oprtions: {
    cmsConfig: `/static/admin/config.yml`
  },
}

module.exports = {
  siteMetadata: {
    title: 'Hollis House',
    description: 'This is a store, we sell stuff.'
  },
  plugins: [

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
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options:  {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'images',
      },
    },
  ],
}
