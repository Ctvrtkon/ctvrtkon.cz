var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}

module.exports = {
  siteMetadata: {
    title: "ctvrtkon.cz"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          netlifyCmsPaths,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 820,
              backgroundColor: "transparent"
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Čtvrtkon.cz`,
        short_name: `Čtvrtkon`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#007CA3`,
        display: `minimal-ui`,
        icon: `static/img/icon-512x512.png`,
        icons: [
          {
            "src": "static/img/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "static/img/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "static/img/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-132203623-1",
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
