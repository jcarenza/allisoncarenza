import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';

const meta = {
    title: '',
    description: '',
    image: ''
};

const CategoriesPage = ({
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title }
        }
    }
}) => (
    <Layout>
        {/* <Helmet>
            <title>Categories | {title}</title>
            <meta name="description" content={meta.description} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={meta.image} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} />
        </Helmet> */}
        <div id="main">
            <h1>Categories</h1>
            <ul>
                {group.map(category => (
                    <li key={category.fieldValue}>
                        <Link to={`/blog/categories/${category.fieldValue.toLowerCase().replace(' ', '-')}/`}>
                            {category.fieldValue} ({category.totalCount})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </Layout>
);

CategoriesPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired
                }).isRequired
            )
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired
            })
        })
    })
};

export default CategoriesPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___category) {
                fieldValue
                totalCount
            }
        }
    }
`;
