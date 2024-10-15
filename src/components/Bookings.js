import React, { useState } from 'react';
import AllBooking from './AllBooking';
import '../styles/Bookings.css';

function Bookings() {
    const [selectedPage, setSelectedPage] = useState(''); // State to store selected page

    const handleDropdownChange = (event) => {
        setSelectedPage(event.target.value);
    };

    return (
        <div className="bookings-section">
            <h2>Bookings</h2>
            <select onChange={handleDropdownChange} className="bookings-dropdown">
                <option value="">Select Booking Option</option>
                <option value="all">All Bookings</option>
                <option value="add">Add Booking</option>
                <option value="edit">Edit Booking</option>
            </select>

            {/* Conditional rendering based on the dropdown selection */}
            {selectedPage === 'all' && (
                <div>
                    <h3>All Bookings</h3>
                    <AllBooking /> {/* Render AllBooking List */}
                </div>
            )}

            {selectedPage === 'add' && (
                <div>
                    <h3>Add New Booking</h3>
                    {/* Add booking form or content here */}
                    <p>Form to add new booking...</p>
                </div>
            )}


        </div>
    );
}

export default Bookings;