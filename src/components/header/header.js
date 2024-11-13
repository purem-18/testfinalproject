import React, { useState } from 'react'
import logo from "../../assets/images/Logo.svg"
import "./header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <img src={logo} alt="Logo" />
      <button className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <nav className={isMenuOpen ? 'open' : ''}>
        <ul>
          <li><a className='shine-on-hover' href="./">Home</a></li>
          <li><a className='shine-on-hover' href="./about">About</a></li>
          <li><a className='shine-on-hover' href="./menu">Menu</a></li>
          <li><a className='shine-on-hover' href="./reservations">Reservations</a></li>
          <li><a className='shine-on-hover' href="./online_order">Order Online</a></li>
          <li><a className='shine-on-hover' href="./login">Login</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header