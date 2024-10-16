import React, { useState, useEffect } from 'react';
import '../styles/Customers.css';

const CustomerTable = ({ customers, onCustomerUpdate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [editCustomerId, setEditCustomerId] = useState(null);
    const [editedCustomer, setEditedCustomer] = useState({
        name: '',
        phone: '',
        email: '',
        checkInDate: '',
        roomType: 'Ordinary',
        status: 'Active',
        idImage: null,
        location: ''
    });
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        if (onCustomerUpdate) {
            onCustomerUpdate(customers);
        }
    }, [customers, onCustomerUpdate]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleDeleteCustomer = (id) => {
        onCustomerUpdate(customers.filter(customer => customer.id !== id));
    };

    const handleEditCustomer = (customer) => {
        setEditCustomerId(customer.id);
        setEditedCustomer({ ...customer });
    };

    const handleSaveCustomer = (id) => {
        const updatedCustomers = customers.map(customer =>
            customer.id === id ? { ...customer, ...editedCustomer } : customer
        );
        onCustomerUpdate(updatedCustomers);
        setEditCustomerId(null);
        setActiveDropdown(null);
    };

    const toggleDropdown = (id) => {
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm) ||
        (customer.email && customer.email.toLowerCase().includes(searchTerm)) ||
        (customer.location && customer.location.toLowerCase().includes(searchTerm))
    );

    return (
        <div className="customer-wrapper">
            <h2 className="customer-title">Customer List</h2>
            <div className="customer-search-container">
                <input
                    type="text"
                    placeholder="Search Customers"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="customer-search-input"
                />
            </div>
            <table className="customer-data-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Check-in Date</th>
                        <th>Room Type</th>
                        <th>Status</th>
                        <th>ID Image</th>
                        <th>Last Checkout Date</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCustomers.length > 0 ? filteredCustomers.map(customer => (
                        <tr key={customer.id}>
                            <td>
                                {editCustomerId === customer.id ? (
                                    <input
                                        value={editedCustomer.name}
                                        onChange={(e) => setEditedCustomer({ ...editedCustomer, name: e.target.value })}
                                        className="customer-edit-input"
                                    />
                                ) : (
                                    customer.name
                                )}
                            </td>
                            <td>
                                {editCustomerId === customer.id ? (
                                    <input
                                        value={editedCustomer.phone}
                                        onChange={(e) => setEditedCustomer({ ...editedCustomer, phone: e.target.value })}
                                        className="customer-edit-input"
                                    />
                                ) : (
                                    customer.phone
                                )}
                            </td>
                            <td>
                                {editCustomerId === customer.id ? (
                                    <input
                                        type="date"
                                        value={editedCustomer.checkInDate}
                                        onChange={(e) => setEditedCustomer({ ...editedCustomer, checkInDate: e.target.value })}
                                        className="customer-edit-input"
                                    />
                                ) : (
                                    customer.checkInDate
                                )}
                            </td>
                            <td>
                                {editCustomerId === customer.id ? (
                                    <select
                                        value={editedCustomer.roomType}
                                        onChange={(e) => setEditedCustomer({ ...editedCustomer, roomType: e.target.value })}
                                        className="customer-edit-input"
                                    >
                                        <option value="Ordinary">Ordinary</option>
                                        <option value="Government">Government</option>
                                    </select>
                                ) : (
                                    customer.roomType
                                )}
                            </td>
                            <td>
                                {editCustomerId === customer.id ? (
                                    <select
                                        value={editedCustomer.status}
                                        onChange={(e) => setEditedCustomer({ ...editedCustomer, status: e.target.value })}
                                        className="customer-edit-input"
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                ) : (
                                    customer.status
                                )}
                            </td>
                            <td>{customer.idImage ? 'Uploaded' : 'No Image'}</td>
                            <td>{customer.lastCheckout}</td>
                            <td>
                                {editCustomerId === customer.id ? (
                                    <input
                                        value={editedCustomer.location}
                                        onChange={(e) => setEditedCustomer({ ...editedCustomer, location: e.target.value })}
                                        className="customer-edit-input"
                                    />
                                ) : (
                                    customer.location
                                )}
                            </td>
                            <td className="customer-action-menu">
                                <button className="customer-three-dot-menu" onClick={() => toggleDropdown(customer.id)}>
                                    &#x2022;&#x2022;&#x2022;
                                </button>
                                {activeDropdown === customer.id && (
                                    <div className="customer-action-dropdown">
                                        {editCustomerId === customer.id ? (
                                            <button onClick={() => handleSaveCustomer(customer.id)}>Save</button>
                                        ) : (
                                            <button onClick={() => handleEditCustomer(customer)}>Edit</button>
                                        )}
                                        <button onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="9">No customers found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerTable;
