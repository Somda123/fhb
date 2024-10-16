import React, { useState } from 'react';
import '../styles/Sidebar.css'; // Ensure the path is correct

const Sidebar = ({ onSidebarClick }) => {
    const [showBookingDropdown, setShowBookingDropdown] = useState(false);
    const [showRoomDropdown, setShowRoomDropdown] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State for sidebar visibility
    const [isHovering, setIsHovering] = useState(false); // State for hover detection

    // Toggle Booking dropdown
    const toggleBookingDropdown = () => {
        setShowBookingDropdown(!showBookingDropdown);
    };

    // Toggle Room dropdown
    const toggleRoomDropdown = () => {
        setShowRoomDropdown(!showRoomDropdown);
    };

    // Toggle Sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        setIsHovering(false); // Reset hovering when manually toggled
    };

    // Handle mouse entering the sidebar area
    const handleMouseEnter = () => {
        if (!isSidebarOpen) {
            setIsHovering(true); // Only expand if sidebar is closed
        }
    };

    // Handle mouse leaving the sidebar area
    const handleMouseLeave = () => {
        if (isHovering) {
            setIsHovering(false); // Collapse when the mouse leaves
        }
    };

    return (
        <div className="app-container">
            {/* Sidebar */}
            <div
                className={`sidebar ${isSidebarOpen || isHovering ? 'open' : 'closed'}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button className="hamburger" onClick={toggleSidebar}>
                    &#9776; {/* Hamburger icon */}
                    <span className="sidebar-title">{(isSidebarOpen || isHovering) && '𝐑𝐞𝐬𝐭 𝐇𝐨𝐮𝐬𝐞 𝐝𝐚𝐧𝐭𝐞𝐰𝐚𝐝𝐚'}</span>
                </button>

                <ul>
                    <li onClick={() => onSidebarClick('dashboard')}>
                        <i className="fa fa-dashboard"></i> {/* Dashboard icon */}
                        <span>{(isSidebarOpen || isHovering) && 'Dashboard'}</span>
                    </li>

                    {/* Bookings Dropdown */}
                    <li onClick={toggleBookingDropdown} className="bookings-dropdown-toggle">
                        <i className="fa fa-book"></i>
                        <span>{(isSidebarOpen || isHovering) && 'Bookings'}</span>
                        <i className={`fa ${showBookingDropdown ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                        <ul className={showBookingDropdown ? 'open' : ''}>
                            <li onClick={() => onSidebarClick('allBookings')}>
                                <i className="fa fa-list"></i>
                                <span>{(isSidebarOpen || isHovering) && 'All Bookings'}</span>
                            </li>
                            <li onClick={() => onSidebarClick('addBooking')}>
                                <i className="fa fa-plus"></i>
                                <span>{(isSidebarOpen || isHovering) && 'Add Booking'}</span>
                            </li>
                        </ul>
                    </li>

                    {/* Room Dropdown */}
                    <li onClick={toggleRoomDropdown} className="rooms-dropdown-toggle">
                        <i className="fa fa-bed"></i> {/* Room icon */}
                        <span>{(isSidebarOpen || isHovering) && 'Room'}</span>
                        <i className={`fa ${showRoomDropdown ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                        <ul className={showRoomDropdown ? 'open' : ''}>
                            <li onClick={() => onSidebarClick('allRooms')}>
                                <i className="fa fa-th"></i> {/* All Rooms icon */}
                                <span>{(isSidebarOpen || isHovering) && 'All Rooms'}</span>
                            </li>
                        </ul>
                    </li>

                    <li onClick={() => onSidebarClick('customers')}>
                        <i className="fa fa-users"></i> {/* Customers icon */}
                        <span>{(isSidebarOpen || isHovering) && 'Customers'}</span>
                    </li>
                    <li onClick={() => onSidebarClick('payment')}>
                        <i className="fa fa-money"></i> {/* Payment icon */}
                        <span>{(isSidebarOpen || isHovering) && 'Payment'}</span>
                    </li>
                    <li onClick={() => onSidebarClick('settings')}>
                        <i className="fa fa-cog"></i> {/* Settings icon */}
                        <span>{(isSidebarOpen || isHovering) && 'Settings'}</span>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className={`main-content ${isSidebarOpen || isHovering ? 'sidebar-open' : 'sidebar-closed'}`}>
                {/* Placeholder for dynamic content */}
            </div>
        </div>
    );
};

export default Sidebar;
