// import React from 'react';
// import Header from './components/Header';
// import ImageSlider from './components/ImageSlider';
// import BookingForm from './components/BookingForm';
// import './App.css';
// import RoomAvailabilityCalendar from './components/RoomAvailabilityCalendar';
// import TermsAndConditions from './components/TermsAndConditions';
// import Footer from './components/Footer.js'
// import '@fortawesome/fontawesome-free/css/all.min.css';


// const App = () => {
//   return (
//     <div className="app">
//       <Header />
//       <ImageSlider />
      
//       {/* Centered Section for Comment and Availability Heading */}
//       <div className="centered-section">
//         <p className="comfort-comment">Your Comfort Is Our Priority!</p>
//         <h2 className="availability-heading">
//           Check Availability | उपलब्धता जांचें
//         </h2>
//       </div>

//       <BookingForm />
//       <RoomAvailabilityCalendar />
//       <TermsAndConditions />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/Main'
import BookRoom  from "./components/BookRoom";
import Admin from "./components/Admin";

function App (){
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Main/>} />
        <Route path="/bookroom" element={<BookRoom />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>


    
  )
}


export default App

