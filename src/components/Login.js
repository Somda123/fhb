// src/component/Login.js
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success message briefly
    setShowSuccessMessage(true);

    // Clear email and password fields
    setEmail('');
    setPassword('');

    // Hide success message after 1 second
    setTimeout(() => {
      setShowSuccessMessage(false);
      navigate('/admin')
    }, 2000);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Admin Login Page</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button  type="submit" className='button'>Login</button>
        {showSuccessMessage && <p className="success-message">Login Successfully!</p>}

        {/* <button  type="button" className="forgot-password-button">Forgot Password?</button> */}
      </form>
    </div>
  );
}

export default Login;