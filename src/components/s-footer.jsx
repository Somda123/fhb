import React from 'react';
import '../styles/s-footer.css';

const Footer = ({ contactName, email }) => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <h3>Contact Us</h3>
                <ul>
                    <li>Name: {contactName}</li>
                    <li>Email: {email}</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
