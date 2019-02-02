import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const CategoryPage = ({ pageContext, data }) => {
    const { category } = pageContext;
    const { edges, totalCount } = data.allMarkdownRemark;

    return (
        <Layout>
            <div id="main">
                <h1>{`${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${category}"`}</h1>
                <ul>
                    {edges.map(({ node }) => {
                        const { title } = node.frontmatter;
                        const { slug } = node.fields;
                        return (
                            <li key={slug}>
                                <Link to={slug}>{title}</Link>
                            </li>
                        );
                    })}
                </ul>
                <Link to="/blog/categories">All tags</Link>
            </div>
        </Layout>
    );
};

CategoryPage.propTypes = {
    pageContext: PropTypes.shape({
        category: PropTypes.string.isRequired
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired
                        })
                    })
                }).isRequired
            )
        })
    })
};

export default CategoryPage;

export const pageQuery = graphql`
    query($category: String) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { category: { eq: $category } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;
