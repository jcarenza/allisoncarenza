import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Footer from '../components/Footer';

const meta = {
    title: 'Pricing', // 70 character limit
    image: '', // 1200 x 627
    description: '' // 200 character limit
};
// https://developers.facebook.com/tools/debug/
// https://cards-dev.twitter.com/validator

export default class Pricing extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet>
                    <title>{meta.title} | Allison Carenza Photography</title>
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
                        <h1>{meta.title}</h1>
                        <p>info</p>
                    </section>
                    <Footer />
                </div>
            </Layout>
        );
    }
}
