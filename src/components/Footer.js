import React from 'react'
import lemon_logo from "../assets/images/lemon_colored.png"

const Footer = () => {
  return (
    <div>
      <img src={lemon_logo} alt="" width="20px" />
      <section>
        <h3>Doormat Navigation</h3>
        <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./about">About</a></li>
            <li><a href="./menu">Menu</a></li>
            <li><a href="./reservations">Reservations</a></li>
            <li><a href="./online_order">Order Online</a></li>
            <li><a href="./login">Login</a></li>
        </ul>
      </section>
      <section>
        <h3>Contact</h3>
        <p>B-16, Safdarjung Enclave, New Delhi 110010</p>
        <p>Phone number: 986352776</p>
        <p>email: moirang.work@gmail.com</p>
      </section>
      <section>
        social media links add here
      </section>
    </div>
  )
}

export default Footer
