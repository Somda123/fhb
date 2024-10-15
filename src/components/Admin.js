import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import AllBooking from './AllBooking';
import AddBooking from './AddBooking';
import AllRooms from './AllRooms';
import Customers from './Customers';
import Settings from './Settings';
import Header from './Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Admin.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [customers, setCustomers] = useState([]); // State to hold customer data

  // Function to handle new customer addition
  const handleAddCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]); // Add the new customer to the state
  };

  // Handle sidebar item click and page switching
  const handleSidebarClick = (page) => {
    setActivePage(page);
  };

  // Toggle Sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`app ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {/* Sidebar */}

      {/* Main Content */}
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {/* Header */}
        <Header />

      <Sidebar isOpen={isSidebarOpen} onSidebarClick={handleSidebarClick} onToggle={toggleSidebar} />


        {/* Content */}
        <div className="content">
          {activePage === 'dashboard' && <Dashboard />}
          {activePage === 'allBookings' && <AllBooking customers={customers} />}
          {activePage === 'addBooking' && <AddBooking onAddCustomer={handleAddCustomer} />} {/* Pass the function */}
          {activePage === 'allRooms' && <AllRooms />}
          {activePage === 'customers' && <Customers customers={customers} onCustomerUpdate={setCustomers} />}
          {activePage === 'settings' && <Settings />}
        </div>
      </div>
    </div>
  );
}

export default App;