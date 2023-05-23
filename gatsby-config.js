/**
 * @type {import('gatsby').GatsbyConfig}
 */
const customQuery = {
    sm: '(max-width: 767px)',
    ss: '(max-width: 413px)'
};
module.exports = {
    siteMetadata: {
        title: `BASE WEBSITE`,
        siteUrl: `https://www.base.page`,
        description: `Description`,
        image: `src/images/favicon.svg`,
        og: {
            siteName: `BASE WEBSITE`,
        },
        lang: {
            _type: 'localeString',
            en: 'DE',
            de: 'EN'
        },
    },
    plugins: [{
        resolve: 'gatsby-source-sanity',
        options: {
            "projectId": "zbhr2t9j",
            "dataset": "production",
            overlayDrafts: true,
            watchMode: true,
            token: ''
        }
    }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/favicon.svg',
            },
        },
        {
            resolve: "gatsby-plugin-breakpoints",
            options: {
                queries: customQuery,
            }
        }, 'gatsby-plugin-react-helmet', {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaults: {
                    quality: 70,
                    formats: ['auto', 'webp', 'avif'],
                    placeholder: 'tracedSVG',
                },
            },
        },
        `gatsby-remark-images`,
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        }
    ]
};
/*
{
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: '',
                timeout: 3500,
            },
        },{
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "",
                ],
                pluginConfig: {
                    head: true,
                    respectDNT: true,
                },
            },
        },
 */
