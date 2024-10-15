import React from 'react';
import '../styles/Header.css'; // Create a separate CSS file for header styling

const Header = () => {
    return (
        <div className="header">
            <div className="header-icons">
                 <i className="fas fa-user profile-icon"></i> {/* Profile icon */}
                <i className="fas fa-bell notification-icon"></i> {/* Notification icon */}
            </div>
        </div>
    );
};

export default Header;
