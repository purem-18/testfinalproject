import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import "./bookingpage.css";
import { fetchAPI, submitAPI, store } from "./api";

const Main = () => {
  useEffect(() => {
    store(); // Initialize LocalStorage on component mount
  }, []);

  const initializeTimes = async () => {
    const today = new Date().toISOString().split("T")[0];
    const times = await fetchAPI(today);
    console.log("Fetched times:", times);
    return times;
  };

  const updateTimes = (state, action) => {
    if (action.type === "UPDATE_TIMES") {
      console.log("Updating times:", action.payload);
      return action.payload;
    }
    return state;
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    initializeTimes().then((times) => {
      dispatch({ type: "UPDATE_TIMES", payload: times });
    });
  }, []);

  return (
    <div className="page-background">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

const BookingForm = ({ availableTimes, dispatch }) => {
  const [bookingDetails, setBookingDetails] = React.useState({
    seats: 0,
    date: "",
    time: "",
    occasion: "",
    specialRequests: "",
  });

  const [personalDetails, setPersonalDetails] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
  });

  const [agreeTerms, setAgreeTerms] = React.useState(false);

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
    if (name === "date") {
      fetchAPI(value).then((times) => {
        dispatch({ type: "UPDATE_TIMES", payload: times });
      });
    }
  };

  const handlePersonalChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };

  const isBookingDetailsFilled = () => {
    return (
      bookingDetails.seats > 0 &&
      bookingDetails.date &&
      bookingDetails.time &&
      bookingDetails.occasion
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isBookingDetailsFilled() && agreeTerms) {
      console.log("Booking submitted:", {
        ...bookingDetails,
        ...personalDetails,
      });
      const result = await submitAPI({ ...bookingDetails, ...personalDetails });
      if (result) {
        alert("Booking request successfully submitted!");
        // Reset form or navigate to confirmation page
      } else {
        alert("Submission failed. This time slot may no longer be available.");
      }
      // Refresh available times after submission
      fetchAPI(bookingDetails.date).then((times) => {
        dispatch({ type: "UPDATE_TIMES", payload: times });
      });
    } else {
      alert(
        "Please fill all required fields and agree to the terms and conditions."
      );
    }
  };

  return (
    <div className="table-booking">
      <h2>Table Reservation</h2>
      <form id="bookingform" onSubmit={handleSubmit}>
        <div className="booking-details">
          <h3>Booking Details</h3>
          <div className="seats-section">
            <>
              <p>Enter number of seats:</p>
              <ul>
                <li>Minimum: 1 seat</li>
              </ul>
            </>
            <div className="seats-input">
              <input
                type="number"
                name="seats"
                value={bookingDetails.seats}
                onChange={handleBookingChange}
                min="0"
                required
                aria-label="Number of seats"
              />
            </div>
          </div>
          <input
            type="date"
            name="date"
            value={bookingDetails.date}
            onChange={handleBookingChange}
            required
            aria-label="Reservation date"
          />
          <select
            name="time"
            value={bookingDetails.time}
            onChange={handleBookingChange}
            required
            aria-label="Reservation time"
          >
            <option value="">Select a time</option>
            {Array.isArray(availableTimes) &&
              availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
          </select>
          <textarea
            name="occasion"
            value={bookingDetails.occasion}
            onChange={handleBookingChange}
            placeholder="Occasion (Birthday, Anniversary etc.) *Required"
            aria-label="Occasion"
          />
          <textarea
            name="specialRequests"
            value={bookingDetails.specialRequests}
            onChange={handleBookingChange}
            placeholder="Special Requests (Optional)"
            aria-label="Special requests"
          />
        </div>

        <div
          className={`personal-details ${
            isBookingDetailsFilled() ? "" : "greyed-out"
          }`}
        >
          <h3>Personal Details</h3>
          <input
            type="text"
            name="firstName"
            value={personalDetails.firstName}
            onChange={handlePersonalChange}
            placeholder="First Name"
            required
            disabled={!isBookingDetailsFilled()}
            aria-label="First name"
          />
          <input
            type="text"
            name="lastName"
            value={personalDetails.lastName}
            onChange={handlePersonalChange}
            placeholder="Last Name"
            required
            disabled={!isBookingDetailsFilled()}
            aria-label="Last name"
          />
          <input
            type="email"
            name="email"
            value={personalDetails.email}
            onChange={handlePersonalChange}
            placeholder="Email"
            required
            disabled={!isBookingDetailsFilled()}
            aria-label="Email"
          />
          <input
            type="tel"
            name="contactNumber"
            value={personalDetails.contactNumber}
            onChange={handlePersonalChange}
            placeholder="Contact Number"
            required
            disabled={!isBookingDetailsFilled()}
            aria-label="Contact number"
          />
        </div>

        <div className="terms">
          <label>
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              disabled={!isBookingDetailsFilled()}
              aria-label="Agree to terms and conditions"
            />
            I agree with the <Link to="/terms">terms and conditions</Link> and{" "}
            <Link to="/privacy">privacy policy</Link>
          </label>
        </div>

        <button
          className="neon-button"
          type="submit"
          disabled={!isBookingDetailsFilled() || !agreeTerms}
          aria-label="Book table"
        >
          Book Table
        </button>
      </form>
    </div>
  );
};

export default Main;
