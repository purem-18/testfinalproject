import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../../assets/images/Logo.svg";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" aria-label="Little Lemon Logo" />
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="navigation-menu"
        aria-label="Toggle navigation menu"
      >
        <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <nav id="navigation-menu" className={isMenuOpen ? 'open' : ''}>
        <ul>
          <li><NavLink className={`shine-on-hover ${location.pathname === '/' ? 'active-shine' : ''}`} to="/">Home</NavLink></li>
          <li><NavLink className={`shine-on-hover ${location.pathname === '/about' ? 'active-shine' : ''}`} to="/about">About</NavLink></li>
          <li><NavLink className={`shine-on-hover ${location.pathname === '/menu' ? 'active-shine' : ''}`} to="/menu">Menu</NavLink></li>
          <li><NavLink className={`shine-on-hover ${location.pathname === '/reservations' ? 'active-shine' : ''}`} to="/reservations">Reservations</NavLink></li>
          <li><NavLink className={`shine-on-hover ${location.pathname === '/online_order' ? 'active-shine' : ''}`} to="/online_order">Order Online</NavLink></li>
          <li><NavLink className={`shine-on-hover ${location.pathname === '/login' ? 'active-shine' : ''}`} to="/login">Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;