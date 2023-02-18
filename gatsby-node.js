const path = require('path');

const extraLanguages = ["en"]

const createLocalePage = (page, createPage) => {
    const { context, ...rest } = page

    createPage({
        ...rest,
        context: {
            ...context,
            locale: process.env.LOCALE,
        },
    })

    if (extraLanguages.length) {
        extraLanguages.forEach(code => {
            const { path, context, ...rest } = page

            createPage({
                ...rest,
                path: `/${code}${path}`,
                context: {
                    ...context,
                    locale: code,
                },
            })
        })
    }
}

exports.createPages = async ({ actions, graphql}) => {

    const resultSubPages = await graphql(`
        {
    allSanitySubpages{
    edges
    {
    node{
      slug{
        current
        }
        }
        }
    }
    }
    `);

    const subPages = resultSubPages.data.allSanitySubpages.edges.map(({node}) => node);

    const { createPage } = actions

    subPages.forEach(subPage => {
        const page = {
            path: '/'  +  subPage.slug.current,
            component: path.resolve('./src/templates/subpage.js'),
            context:  {
                slug: subPage.slug.current
            }
        }
        createLocalePage(page, createPage)
    });
}

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions

    deletePage(page)

    createLocalePage(page, createPage)
}

