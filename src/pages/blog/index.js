import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';

const meta = {
    title: '', // 70 character limit
    image: '', // 1200 x 627
    description: '' // 200 character limit
};
// https://developers.facebook.com/tools/debug/
// https://cards-dev.twitter.com/validator

export default class Blog extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Blog | Allison Carenza Photography</title>
                    <meta name="description" content={meta.description} />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={meta.title} />
                    <meta property="og:description" content={meta.description} />
                    <meta property="og:image" content={meta.image} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content={meta.title} />
                    <meta name="twitter:description" content={meta.description} />
                    <meta name="twitter:image" content={meta.image} />
                </Helmet>

                <div id="main">
                    <section id="a">
                        <h1>Blog</h1>
                        <p>...</p>
                        {this.props.data.allMarkdownRemark.edges.map(({ node }) => {
                            const title = node.frontmatter.title || node.fields.slug;
                            return (
                                <div key={node.fields.slug}>
                                    <h3>
                                        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                                            {title}
                                        </Link>
                                    </h3>
                                    <small>{node.frontmatter.date}</small>
                                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                </div>
                            );
                        })}
                    </section>
                </div>
            </Layout>
        );
    }
}

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                    }
                }
            }
        }
    }
`;
