import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/Footer';
import LoginPage from './pages/login/LoginPage';
import BookingForm from './pages/tablebooking/BookingPage';
import About from './pages/about_screen/About';
import Menu from './pages/menu/Menu';
import OnlineOrder from './pages/onlineorder/OnlineOrder';
import ConfirmedBooking from './pages/tablebooking/ConfirmedBooking';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<BookingForm />} />
          <Route path="/online_order" element={<OnlineOrder />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/booking-confirmed" element={<ConfirmedBooking/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;