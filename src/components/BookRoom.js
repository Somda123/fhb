import React, { useState } from "react";
import './BookRoom.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookRoom = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    userType: "ordinary",
    idImage: null,
    checkInDate: new Date(),
    checkOutDate: new Date(),
    roomNumber: "",
    numberOfGuests: "",
    numberOfRooms: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track form submission

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validation for Name (Only allow text, no numbers)
    if (name === "name") {
      const textOnly = value.replace(/[0-9]/g, ''); // Remove numbers
      setFormData({
        ...formData,
        [name]: textOnly,
      });
    }

    // Validation for Mobile Number (Only allow numbers, limit to 10 digits)
    else if (name === "mobile") {
      const numberOnly = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
      if (numberOnly.length <= 10) { // Limit to 10 digits
        setFormData({
          ...formData,
          [name]: numberOnly,
        });
      }
    }

    // Handle other input fields normally
    else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      idImage: e.target.files[0],
    });
  };

  const handleDateChange = (date, fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Set form as submitted
    alert("Booking submitted!");
  };

  return (
    <>
      <div className="book-room-bg-overlay"></div>
      <div className="book-room-form">
        <h2>Plan Your Stay With Us</h2>

        {isSubmitted ? ( // Check if the form is submitted
          <div className="submission-success">
            <h3>Thank you! Your booking has been submitted successfully.</h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="book-room-form-group">
              <label> Full Name:</label>
              <input
                className="book-room-input"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="book-room-form-group">
              <label> Mobile Number:</label>
              <input
                className="book-room-input"
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="book-room-form-group">
              <label>Select location:</label>
              <select
                className="book-room-select"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              >
                <option value="Dantewada">Dantewada</option>
                <option value="Geedam">Geedam</option>
                <option value="Barsoor">Barsoor</option>
              </select>
            </div>

            <div className="book-room-form-group">
              <label>Number of Guests:</label>
              <input
                className="book-room-input"
                type="number"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="book-room-form-group">
              <label className="book-room-dif">Number of Rooms:</label>
              <input
                className="book-room-input"
                type="number"
                name="numberOfRooms"
                value={formData.numberOfRooms}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="book-room-date-container">
              <div className="book-room-form-group">
                <label>Check-in Date:</label>
                <DatePicker
                  selected={formData.checkInDate}
                  onChange={(date) => handleDateChange(date, 'checkInDate')}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  className="book-room-date-picker"
                />
              </div>
              <div className="book-room-form-group">
                <label>Check-out Date:</label>
                <DatePicker
                  selected={formData.checkOutDate}
                  onChange={(date) => handleDateChange(date, 'checkOutDate')}
                  dateFormat="dd/MM/yyyy"
                  minDate={formData.checkInDate}
                  className="book-room-date-picker"
                />
              </div>
            </div>

            <div className="book-room-form-group">
              <label>Type:</label>
              <select
                className="book-room-select"
                name="userType"
                value={formData.userType}
                onChange={handleInputChange}
                required
              >
                <option value="ordinary">Non-Government</option>
                <option value="government">Government Official</option>
              </select>
            </div>
            <div className="book-room-form-group">
              <label>
                Upload {formData.userType === "ordinary" ? "Aadhar/PAN" : "Government ID"}:
              </label>
              <input
                className="book-room-input"
                type="file"
                name="idImage"
                onChange={handleFileChange}
                required
              />
            </div>
            <button type="submit" className="book-room-btn-book-now">Book Now</button>
          </form>
        )}
      </div>
    </>
  );
};

export default BookRoom;
