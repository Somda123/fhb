import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h2 className='dashboard-heading'>Dashboard Overview</h2>
            <div className="dashboard-stats">
                <div className="dashboard-card">
                    <h3>Total Bookings</h3>
                    <p>00</p>
                </div>
                <div className="dashboard-card">
                    <h3>Rooms Available</h3>
                    <p>00</p>
                </div>
                <div className="dashboard-card">
                    <h3>Expenses</h3>
                    <p>/-</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;