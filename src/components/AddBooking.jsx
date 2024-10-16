import React, { useState } from 'react';
import '../styles/AddBooking.css';

const AddBooking = ({ onAddCustomer }) => {
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [roomType, setRoomType] = useState('ordinary');
    const [status, setStatus] = useState('active');
    const [idImage, setIdImage] = useState(null);
    const [location, setLocation] = useState('Dantewada');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCustomer = {
            id: new Date().getTime(),
            name: customerName,
            phone: phoneNumber,
            checkInDate,
            checkOutDate,
            roomType,
            status,
            idImage: idImage ? idImage.name : null,
            lastCheckout: checkOutDate,
            location,
        };

        onAddCustomer(newCustomer);

        setCustomerName('');
        setPhoneNumber('');
        setCheckInDate('');
        setCheckOutDate('');
        setRoomType('ordinary');
        setStatus('active');
        setIdImage(null);
        setLocation('Dantewada');
    };

    return (
        <div className="add-booking-container">
            <h2 className="add-booking-title">Add Booking</h2>
            <form className="add-booking-form" onSubmit={handleSubmit}>
                <table className="add-booking-table">
                    <tbody>
                        <tr>
                            <td><label htmlFor="customerName" className="add-booking-label">Customer Name:</label></td>
                            <td><input type="text" id="customerName" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required className="add-booking-input" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="phoneNumber" className="add-booking-label">Phone Number:</label></td>
                            <td><input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required className="add-booking-input" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="checkIn" className="add-booking-label">Check-In Date:</label></td>
                            <td><input type="date" id="checkIn" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required className="add-booking-input" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="checkOut" className="add-booking-label">Check-Out Date:</label></td>
                            <td><input type="date" id="checkOut" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required className="add-booking-input" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="roomType" className="add-booking-label">Room Type:</label></td>
                            <td>
                                <select id="roomType" value={roomType} onChange={(e) => setRoomType(e.target.value)} required className="add-booking-select">
                                    <option value="ordinary">Ordinary</option>
                                    <option value="government">Government</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="status" className="add-booking-label">Status:</label></td>
                            <td>
                                <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} required className="add-booking-select">
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="idImage" className="add-booking-label">ID Image:</label></td>
                            <td><input type="file" id="idImage" accept="image/*" onChange={(e) => setIdImage(e.target.files[0])} className="add-booking-file-input" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="location" className="add-booking-label">Location:</label></td>
                            <td>
                                <select id="location" value={location} onChange={(e) => setLocation(e.target.value)} required className="add-booking-select">
                                    <option value="Dantewada">Dantewada</option>
                                    <option value="Barsur">Barsur</option>
                                    <option value="Geedam">Geedam</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" className="add-booking-button">Add Customer</button>
            </form>
        </div>
    );
};

export default AddBooking;