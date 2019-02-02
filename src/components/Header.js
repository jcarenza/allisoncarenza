import React from 'react';
import { Link } from 'gatsby';
import Footer from './Footer';
import avatar from '../assets/images/avatar.jpg';

const Header = () => (
    <header id="header">
        <div className="inner">
            <Link to="/" className="image avatar">
                <img src={avatar} alt="" />
            </Link>
            <div>
                <Link to="/gallery">Gallery</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <div>
                <Link to="/blog">Blog</Link>
            </div>
            <div>
                <Link to="/pricing">Pricing</Link>
            </div>
            <div>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        <Footer />
    </header>
);

export default Header;
