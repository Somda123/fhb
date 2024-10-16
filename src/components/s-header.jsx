import React from 'react';
import '../styles/s-header.css';

const Header = ({ title, }) => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/logo.png" alt="Logo" />
            </div>
            <div className="circuit-house-name">{title}</div>
        </header>
    );
};

export default Header;
