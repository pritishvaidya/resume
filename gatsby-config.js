/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Pritish Vaidya | FrontEnd Developer`,
    author: `Pritish Vaidya`,
    description: `With 6+ years of experience in various industries, I help build scalable FrontEnd and Mobile Apps for different companies.`,
    siteUrl: `https://pritishvaidya.dev`,
    social: {
      twitter: `PritishVaidya`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pritish Vaidya | FrontEnd Developer`,
        short_name: `CV`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#38B2AC`,
        display: `standalone`,
        icon: 'static/favicon-manifest.png'
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-netlify-cms',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true, // Enable tailwindcss support
      }
    }
  ],
};
