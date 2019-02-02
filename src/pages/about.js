import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const meta = {
    title: '', // 70 character limit
    image: '', // 1200 x 627
    description: '' // 200 character limit
};
// https://developers.facebook.com/tools/debug/
// https://cards-dev.twitter.com/validator

export default class About extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet>
                    <title>About | Allison Carenza Photography</title>
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
                        <h1>About</h1>
                        <p>
                            It’s in the imperfections, the scratches on your nose, the mismatched socks, the messy hair,
                            the favorite toy your son won’t let go of. This is where I find true perfection. Let me
                            capture your family the way you are, exactly how you will want to remember yourselves. Fifty
                            years from now, I want you to fondly remember it all, the smiles, the frowns, the curious
                            looks. And in two-hundred years, I want those that come after you, to connect with every
                            emotion we captured, together. To have them feel and see their own smile in your photos, or
                            notice the curls that only you could have passed on, to reflect on the day you spent
                            recording your lives, that is why I do it.
                        </p>

                        <p>
                            My style of photography is clean and not overly Photoshopped. I let the moments speak for
                            themselves. It’s a method that I have perfected over ten years in the business. It’s real,
                            it’s true and I take a little bit of every shot with me to the next.
                        </p>
                    </section>
                </div>
            </Layout>
        );
    }
}
