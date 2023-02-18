/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `frontend`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "zbhr2t9j",
      "dataset": "production"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", "gatsby-plugin-google-gtag", "gatsby-plugin-sitemap"]
};