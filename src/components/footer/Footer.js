import React from 'react';
import { Link } from 'react-router-dom';
import lemon_logo from "../../assets/images/sm-logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import "./footer.css";

const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Order Online', path: '/online_order' },
    { name: 'Login', path: '/login' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={lemon_logo} alt="Little Lemon Logo" />
        </div>
        <div className="footer-nav">
          <h3>Navigation</h3>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}><Link to={item.path}>{item.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>B-16, Safdarjung Enclave, New Delhi 110010</p>
          <p>Phone: +91 986352776</p>
          <p>Email: moirang.work@gmail.com</p>
        </div>
        <div className="footer-social">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;