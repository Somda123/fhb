import React, { useState } from 'react';
import '../styles/AddBooking.css'; // Import corresponding CSS file

const AddBooking = ({ onAddCustomer }) => {
    const [customerName, setCustomerName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [roomType, setRoomType] = useState('ordinary');
    const [status, setStatus] = useState('active');
    const [idImage, setIdImage] = useState(null);
    const [location, setLocation] = useState('Dantewada'); // Location state added

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new customer object
        const newCustomer = {
            id: new Date().getTime(), // Unique ID based on current timestamp
            name: customerName,
            phone: phoneNumber,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            roomType: roomType,
            status: status,
            idImage: idImage ? idImage.name : null, // Use file name if image uploaded
            lastCheckout: checkOutDate, // Assume checkout date is set when adding a booking
            location: location, // Include location in the new customer object
        };

        // Pass the new customer data to the parent component
        onAddCustomer(newCustomer);

        // Reset form fields
        setCustomerName('');
        setPhoneNumber('');
        setCheckInDate('');
        setCheckOutDate('');
        setRoomType('ordinary');
        setStatus('active');
        setIdImage(null);
        setLocation('Dantewada'); // Reset location to default
    };

    return (
        <div className="add-booking">
            <h2>Add Booking</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        {/* Existing fields */}
                        <tr>
                            <td>
                                <label htmlFor="customerName">Customer Name:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="customerName"
                                    value={customerName}
                                    onChange={(e) => setCustomerName(e.target.value)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="phoneNumber">Phone Number:</label>
                            </td>
                            <td>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="checkIn">Check-In Date:</label>
                            </td>
                            <td>
                                <input
                                    type="date"
                                    id="checkIn"
                                    value={checkInDate}
                                    onChange={(e) => setCheckInDate(e.target.value)}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="checkOut">Check-Out Date:</label>
                            </td>
                            <td>
                                <input
                                    type="date"
                                    id="checkOut"
                                    value={checkOutDate}
                                    onChange={(e) => setCheckOutDate(e.target.value)}
                                    required
                                />
                            </td>
                        </tr>
                        {/* Room Type */}
                        <tr>
                            <td>
                                <label htmlFor="roomType">Room Type:</label>
                            </td>
                            <td>
                                <select
                                    id="roomType"
                                    value={roomType}
                                    onChange={(e) => setRoomType(e.target.value)}
                                    required
                                >
                                    <option value="ordinary">Ordinary</option>
                                    <option value="government">Government</option>
                                </select>
                            </td>
                        </tr>
                        {/* Status */}
                        <tr>
                            <td>
                                <label htmlFor="status">Status:</label>
                            </td>
                            <td>
                                <select
                                    id="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    required
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </td>
                        </tr>
                        {/* ID Image */}
                        <tr>
                            <td>
                                <label htmlFor="idImage">ID Image:</label>
                            </td>
                            <td>
                                <input
                                    type="file"
                                    id="idImage"
                                    accept="image/*"
                                    onChange={(e) => setIdImage(e.target.files[0])}
                                />
                            </td>
                        </tr>
                        {/* Location Dropdown */}
                        <tr>
                            <td>
                                <label htmlFor="location">Location:</label>
                            </td>
                            <td>
                                <select
                                    id="location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    required
                                >
                                    <option value="Dantewada">Dantewada</option>
                                    <option value="Barsur">Barsur</option>
                                    <option value="Geedam">Geedam</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className='btn' type="submit">Add Customer</button>
            </form>
        </div>
    );
};

export default AddBooking;
