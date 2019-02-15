import React from 'react';
import { Link } from 'gatsby';
import avatar from '../assets/images/avatar.jpg';

const Header = () => (
    <header id="header">
        <nav className="inner">
            <div id="logo">
                <Link to="/" className="image avatar">
                    <img src={avatar} alt="Allison Carenza" />
                </Link>
            </div>
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
        </nav>
        <div id="social">
            <ul className="icons">
                <li>
                    <a href="https://www.facebook.com/allisoncarenzaphotography" className="icon fa-facebook">
                        <span className="label">Facebook</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/acarenza" className="icon fa-instagram">
                        <span className="label">Instagram</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.pinterest.com/acarenza" className="icon fa-pinterest">
                        <span className="label">Pinterest</span>
                    </a>
                </li>
                <li>
                    <Link to="/contact" className="icon fa-envelope-o">
                        <span className="label">Email</span>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;
