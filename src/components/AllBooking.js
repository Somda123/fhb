import React from 'react';
// import '../styles/AllBooking.css';

const AllBooking = ({ customers }) => {
    return (
        <div className="booking-list">
            <h2 className='all-head'>Booking List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Room Type</th>
                        <th>Status</th>
                        <th>ID Image</th>
                        <th>Location</th> {/* Added Location column */}
                        <th>Last Check-out Date</th> {/* Added Last Check-out Date column */}
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.name}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.roomType}</td>
                            <td>{customer.status}</td>
                            <td>{customer.idImage ? 'Uploaded' : 'No Image'}</td>
                            <td>{customer.location}</td> {/* Fetching Location field */}
                            <td>{customer.lastCheckOutDate || 'N/A'}</td> {/* Fetching Last Check-out Date field */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllBooking;
