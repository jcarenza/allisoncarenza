module.exports = {
    siteMetadata: {
        title: 'Allison Carenza Photography',
        author: 'Allison Carenza',
        description:
            'Allison Carenza is a photographer in Kansas City who specializes in maternity, newborn, and family portrait photography.'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Allison Carenza Photography',
                short_name: 'AC Photo',
                start_url: '/',
                background_color: '#f1f3f5',
                theme_color: '#00ad9f',
                display: 'browser',
                icon: 'src/assets/images/website-icon.png' // This path is relative to the root of the site.
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/posts`,
                name: `blog`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/assets`,
                name: `assets`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590
                        }
                    },
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
        `gatsby-plugin-feed`
    ]
};
