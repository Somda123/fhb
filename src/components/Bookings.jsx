import React, { useState } from 'react';
import '../styles/Bookings.css';

function Bookings() {
    const [selectedPage, setSelectedPage] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedPage(event.target.value);
    };

    return (
        <div className="bookings-section">
            <h2 className="toggle-header">Bookings</h2>
            <select onChange={handleDropdownChange} className="bookings-dropdown">
                <option value="">Select Booking Option</option>
                <option value="all">All Bookings</option>
                <option value="add">Add Booking</option>
                <option value="edit">Edit Booking</option>
            </select>

            {selectedPage === 'all' && (
                <div className="bookings-content">
                    <h3>All Bookings</h3>
                    {/* Render AllBooking List */}
                </div>
            )}

            {selectedPage === 'add' && (
                <div className="bookings-content">
                    <h3>Add New Booking</h3>
                    <p>Form to add new booking...</p>
                </div>
            )}
        </div>
    );
}

export default Bookings;