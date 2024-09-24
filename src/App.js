import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import BookingPage from './components/BookingPage/BookingPage';
import Recommendations from './pages/Recommendations';
import Promotions from './pages/Promotions';
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import AdminLogin from './pages/AdminLogin'; 
import AdminPanel from './pages/AdminPanel'; 

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Состояние для проверки входа администратора

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route 
            path="/admin-login" 
            element={<AdminLogin setIsAdmin={setIsAdmin} />} 
          /> 
          <Route 
            path="/admin-panel" 
            element={isAdmin ? <AdminPanel /> : <Navigate to="/admin-login" />} 
          /> 
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </Router>
    </div>
  );
}

export default App;
