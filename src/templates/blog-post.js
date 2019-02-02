import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

export default class BlogPostTemplate extends React.Component {
    render() {
        const { html, frontmatter, excerpt } = this.props.data.markdownRemark;
        const { title } = this.props.data.site.siteMetadata;
        const { previous, next } = this.props.pageContext;

        return (
            <Layout>
                <Helmet>
                    <title>
                        {frontmatter.title} | {title} : {frontmatter.category}
                    </title>
                    <meta name="description" content={excerpt} />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={frontmatter.title} />
                    <meta property="og:description" content={excerpt} />
                    {/* <meta property="og:image" content={meta.image} /> */}
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content={frontmatter.title} />
                    <meta name="twitter:description" content={excerpt} />
                    {/* <meta name="twitter:image" content={meta.image} /> */}
                </Helmet>
                <div id="main">
                    <article itemScope itemType="http://schema.org/Article">
                        <header>
                            <h1 itemProp="headline">{frontmatter.title}</h1>
                            <p style={{ fontSize: '12px' }}>
                                Posted on{' '}
                                <time pubdate={frontmatter.date} itemProp="dateCreated datePublished">
                                    {frontmatter.date}
                                </time>{' '}
                                in{' '}
                                <span itemProp="articleSection">
                                    <Link
                                        to={`/blog/categories/${frontmatter.category.toLowerCase().replace(' ', '-')}`}
                                    >
                                        {frontmatter.category}
                                    </Link>
                                </span>
                            </p>
                        </header>
                        <section itemProp="articleBody" dangerouslySetInnerHTML={{ __html: html }} />
                        <hr />

                        <ul
                            style={{
                                display: `flex`,
                                flexWrap: `wrap`,
                                justifyContent: `space-between`,
                                listStyle: `none`,
                                padding: 0
                            }}
                        >
                            <li>
                                {previous && (
                                    <Link to={previous.fields.slug} rel="prev">
                                        ← {previous.frontmatter.title}
                                    </Link>
                                )}
                            </li>
                            <li>
                                {next && (
                                    <Link to={next.fields.slug} rel="next">
                                        {next.frontmatter.title} →
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </article>
                </div>
            </Layout>
        );
    }
}

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                category
            }
        }
    }
`;
