const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogPost = path.resolve(`./src/templates/blog-post.js`);
    const categoryTemplate = path.resolve('src/templates/category-page.js');
    return graphql(
        `
            {
                allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                category
                            }
                        }
                    }
                }
            }
        `
    ).then(result => {
        if (result.errors) {
            throw result.errors;
        }

        const posts = result.data.allMarkdownRemark.edges;
        let categories = new Set();

        // Create blog post pages
        posts.forEach((post, index) => {
            if (post.node.frontmatter.category) {
                // store category
                categories.add(post.node.frontmatter.category);
            }
            const previous = index === posts.length - 1 ? null : posts[index + 1].node;
            const next = index === 0 ? null : posts[index - 1].node;
            createPage({
                path: post.node.fields.slug,
                component: blogPost,
                context: {
                    slug: post.node.fields.slug,
                    previous,
                    next
                }
            });
        });

        // Create tag pages
        categories.forEach(category => {
            createPage({
                path: `/blog/categories/${category.toLowerCase().replace(' ', '-')}/`,
                component: categoryTemplate,
                context: {
                    category
                }
            });
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const published = new Date(node.frontmatter.date);
        createNodeField({
            name: `slug`,
            node,
            value: `/${published.getFullYear()}/${('0' + (published.getMonth() + 1)).slice(-2)}${createFilePath({
                node,
                getNode
            })}`
        });
    }
};
