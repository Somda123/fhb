import React, { useState } from 'react';
import '../styles/AllBooking.css';

const AllBooking = ({ customers }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter customers based on search term
    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="booking-list">
            <h2 className="all-head">Booking List</h2>
            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search by name or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <table className="booking-table">
                <thead>
                    <tr>
                        <th className="table-header">Name</th>
                        <th className="table-header">Phone</th>
                        <th className="table-header">Room Type</th>
                        <th className="table-header">Status</th>
                        <th className="table-header">ID Image</th>
                        <th className="table-header">Location</th>
                        <th className="table-header">Last Check-out Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCustomers.map(customer => (
                        <tr key={customer.id} className="table-row">
                            <td className="table-data">{customer.name}</td>
                            <td className="table-data">{customer.phone}</td>
                            <td className="table-data">{customer.roomType}</td>
                            <td className="table-data">{customer.status}</td>
                            <td className="table-data">
                                {customer.idImage ? (
                                    <img src={customer.idImage} alt="ID" className="id-image" />
                                ) : (
                                    'No Image'
                                )}
                            </td>
                            <td className="table-data">{customer.location}</td>
                            <td className="table-data">{customer.lastCheckOutDate || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllBooking;
