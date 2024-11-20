import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tablebooking.css';

const TableBooking = () => {
  const [bookingDetails, setBookingDetails] = useState({
    seats: 0,
    date: '',
    time: '',
    specialRequests: '',
  });

  const [personalDetails, setPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
  });

  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleBookingChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handlePersonalChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };


  const isBookingDetailsFilled = () => {
    return bookingDetails.seats > 0 && bookingDetails.date && bookingDetails.time;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isBookingDetailsFilled() && agreeTerms) {
      console.log('Booking submitted:', { ...bookingDetails, ...personalDetails });
      //to be continued to send to backend
    } else {
      alert('Please fill all required fields and agree to the terms and conditions.');
    }
  };

  return (
    <div className="page-background">
      <div className="table-booking">
        <h2>Table Reservation</h2>
        <form id='tablebooking' onSubmit={handleSubmit}>
          <div className="booking-details">
            <h3>Booking Details</h3>
            <div className="seats-section">
              <div className="seats-instructions">
                <p>Enter number of seats:</p>
                <ul>
                  <li>Minimum: 1 seat</li>
                </ul>
              </div>
              <div className="seats-input">
                <input
                  type="number"
                  name="seats"
                  value={bookingDetails.seats}
                  onChange={handleBookingChange}
                  min="0"
                  required
                />
              </div>
            </div>
            <input
              type="date"
              name="date"
              value={bookingDetails.date}
              onChange={handleBookingChange}
              required
            />
            <input
              type="time"
              name="time"
              value={bookingDetails.time}
              onChange={handleBookingChange}
              required
            />
            <textarea
              name="specialRequests"
              value={bookingDetails.specialRequests}
              onChange={handleBookingChange}
              placeholder="Special Requests (Optional)"
            />
          </div>

          <div className={`personal-details ${isBookingDetailsFilled() ? '' : 'greyed-out'}`}>
            <h3>Personal Details</h3>
            <input
              type="text"
              name="firstName"
              value={personalDetails.firstName}
              onChange={handlePersonalChange}
              placeholder="First Name"
              required
              disabled={!isBookingDetailsFilled()}
            />
            <input
              type="text"
              name="lastName"
              value={personalDetails.lastName}
              onChange={handlePersonalChange}
              placeholder="Last Name"
              required
              disabled={!isBookingDetailsFilled()}
            />
            <input
              type="email"
              name="email"
              value={personalDetails.email}
              onChange={handlePersonalChange}
              placeholder="Email"
              required
              disabled={!isBookingDetailsFilled()}
            />
            <input
              type="tel"
              name="contactNumber"
              value={personalDetails.contactNumber}
              onChange={handlePersonalChange}
              placeholder="Contact Number"
              required
              disabled={!isBookingDetailsFilled()}
            />
          </div>

          <div className="terms">
            <label>
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                disabled={!isBookingDetailsFilled()}
              />
              I agree with the <Link to="/terms">terms and conditions</Link> and{' '}
              <Link to="/privacy">privacy policy</Link>
            </label>
          </div>

          <button className='neon-button' type="submit" disabled={!isBookingDetailsFilled() || !agreeTerms}>
            Book Table
          </button>
        </form>
      </div>
    </div>
  );
};

export default TableBooking;