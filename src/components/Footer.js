import React from 'react';

const Footer = () => (
    <div id="footer">
        <div className="inner">
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
                    <a href="/contact" className="icon fa-envelope-o">
                        <span className="label">Email</span>
                    </a>
                </li>
            </ul>
            <ul className="copyright">
                <li>&copy; Allison Carenza Photography</li>
            </ul>
        </div>
    </div>
);

export default Footer;
