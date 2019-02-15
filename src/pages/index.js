import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
// import Lightbox from 'react-images'
//import Gallery from '../components/Gallery';
import GalleryGrid from '../components/GalleryGrid';

import thumb01 from '../assets/images/thumbs/01.jpg';
import thumb02 from '../assets/images/thumbs/02.jpg';
import thumb03 from '../assets/images/thumbs/03.jpg';
import thumb04 from '../assets/images/thumbs/04.jpg';
import thumb05 from '../assets/images/thumbs/05.jpg';
import thumb06 from '../assets/images/thumbs/06.jpg';

import full01 from '../assets/images/fulls/01.jpg';
import full02 from '../assets/images/fulls/02.jpg';
import full03 from '../assets/images/fulls/03.jpg';
import full04 from '../assets/images/fulls/04.jpg';
import full05 from '../assets/images/fulls/05.jpg';
import full06 from '../assets/images/fulls/06.jpg';

const DEFAULT_IMAGES = [
    {
        id: '1',
        src: full01,
        thumbnail: thumb01
    },
    {
        id: '2',
        src: full02,
        thumbnail: thumb02
    },
    {
        id: '3',
        src: full03,
        thumbnail: thumb03
    },
    {
        id: '4',
        src: full04,
        thumbnail: thumb04
    },
    {
        id: '5',
        src: full05,
        thumbnail: thumb05
    },
    {
        id: '6',
        src: full06,
        thumbnail: thumb06
    },
    {
        id: '7',
        src: full01,
        thumbnail: thumb01
    },
    {
        id: '8',
        src: full02,
        thumbnail: thumb02
    },
    {
        id: '9',
        src: full03,
        thumbnail: thumb03
    }
];

class HomeIndex extends React.Component {
    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox(index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1
        });
    }
    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        return (
            <Layout>
                <Helmet>
                    <title>Allison Carenza Photography</title>
                    <meta name="description" content="" />
                </Helmet>

                <div id="main" className="home">
                    <section id="a">
                        <GalleryGrid
                            images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                                src,
                                thumbnail
                            }))}
                        />
                        <br />
                        <ul className="actions">
                            <li>
                                <Link to="/gallery" className="button">
                                    View Entire Gallery
                                </Link>
                            </li>
                        </ul>
                    </section>

                    <section id="one">
                        <header className="major">
                            <h2>Today’s moments are tomorrow’s memories</h2>
                        </header>
                        <p>
                            For over twelve years, I've devoted my life to capturing authentic portraits. I've learned a
                            lot along the way. I’ve seen trends come and go. But, at the end of the day, it's about
                            connection. Clean, simple, timeless images that reveal the spirit of my subjects.
                        </p>
                        <p>
                            I work through soggy cookies in the hands of little ones. If the bow that matches the outfit
                            ends up in their mouth, we make it something wonderful. I would rather work at capturing the
                            love, that connection the child has with the parents and the curiosity they have for the
                            world. It’s never fake. It’s always entertaining. And, we always come away with something
                            amazing and I wouldn’t trade it for the world.
                        </p>
                        <ul className="actions">
                            <li>
                                <Link to="/about" className="button">
                                    Learn More
                                </Link>
                            </li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>
                            Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci
                            faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.
                        </p>
                        <div className="row">
                            <div className="8u 12u$(small) contactForm">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)">
                                            <input type="text" name="name" id="name" placeholder="Name" />
                                        </div>
                                        <div className="6u 12u$(xsmall)">
                                            <input type="email" name="email" id="email" placeholder="Email" />
                                        </div>
                                        <div className="12u">
                                            <textarea name="message" id="message" placeholder="Message" rows="4" />
                                        </div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li>
                                        <input type="submit" value="Send Message" />
                                    </li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small) infoSidebar">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home">
                                            <span className="label">Address</span>
                                        </h3>
                                        1234 Somewhere Rd.
                                        <br />
                                        Nashville, TN 00000
                                        <br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile">
                                            <span className="label">Phone</span>
                                        </h3>
                                        000-000-0000
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </Layout>
        );
    }
}

export default HomeIndex;
