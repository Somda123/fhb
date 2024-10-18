import React from 'react';
import "../components/Allbooking.css";

const AllBooking = ({ customers }) => {
    return (
        <div className="booking-list">
            <h2 className='all-head'>Booking List</h2>
            <table className='booking-table'>
                <thead className='Allbooking-table-header'>
                <tr>
                        <th className="Allbooking-table-header">Name</th>
                        <th className="Allbooking-table-header">Phone</th>
                        <th className="Allbooking-table-header">Room Type</th>
                        <th className="Allbooking-table-header">Status</th>
                        <th className="Allbooking-table-header">ID Image</th>
                        <th className="Allbooking-table-header">Location</th>
                        <th className="Allbooking-table-header">Last Check-out Date</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id} className="table-row">
                            <td className="Allbooking-table-data">{customer.name}</td>
                            <td className="Allbooking-table-data">{customer.phone}</td>
                            <td className="Allbooking-table-data">{customer.roomType}</td>
                            <td className="Allbooking-table-data">{customer.status}</td>
                            <td className="Allbooking-table-data">
                                {customer.idImage ? (
                                    <img src={customer.idImage} alt="ID" className="id-image" />
                                ) : (
                                    'No Image'
                                )}
                            </td>
                            <td className="Allbooking-table-data">{customer.location}</td>
                            <td className="Allbooking-table-data">{customer.lastCheckOutDate || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllBooking;
