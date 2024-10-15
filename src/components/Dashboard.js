import React from 'react';
// import '../styles/Dashboard.css'; // thi css is effected

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2 className='dash-head'>Dashboard Overview</h2>
            <div className="stats">
                <div className="card">
                    <h3>Total Bookings</h3>
                    <p>00</p>
                </div>
                <div className="card">
                    <h3>Rooms Available</h3>
                    <p>00</p>
                </div>
                <div className="card">
                    <h3>Expenses</h3>
                    <p>/-</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;



