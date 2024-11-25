import React, { useReducer, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./bookingpage.css";
import { fetchAPI, submitAPI, store } from "./api";

export const initializeTimes = async () => {
  const today = new Date().toISOString().split("T")[0];
  const times = await fetchAPI(today);
  console.log("Fetched times:", times);
  return times;
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    console.log("Updating times:", action.payload);
    return action.payload;
  }
  return state;
};

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    store();
  }, []);

  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  useEffect(() => {
    initializeTimes().then((times) => {
      dispatch({ type: "UPDATE_TIMES", payload: times });
    });
  }, []);

  const submitForm = async (formData) => {
    const result = await submitAPI(formData);
    if (result) {
      navigate("/booking-confirmed");
    } else {
      alert("Submission failed. This time slot may no longer be available.");
    }
  };

  return (
    <main className="page-background">
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
};

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
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
      const formData = { ...bookingDetails, ...personalDetails };
      submitForm(formData);
    } else {
      alert(
        "Please fill all required fields and agree to the terms and conditions."
      );
    }
  };

  return (
    <section className="table-booking">
      <h1>Table Reservation</h1>
      <form id="bookingform" onSubmit={handleSubmit}>
        <fieldset className="booking-details">
          <legend>Booking Details</legend>
          <div className="seats-section">
            <label htmlFor="seats">Enter number of seats:</label>
            <p>Minimum: 1 seat</p>
            <div className="seats-input">
              <input
                type="number"
                id="seats"
                name="seats"
                value={bookingDetails.seats}
                onChange={handleBookingChange}
                min="1"
                required
                aria-label="Number of seats"
              />
            </div>
          </div>
          <label htmlFor="date">Reservation date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={bookingDetails.date}
            onChange={handleBookingChange}
            required
          />
          <label htmlFor="time">Reservation time:</label>
          <select
            id="time"
            name="time"
            value={bookingDetails.time}
            onChange={handleBookingChange}
            required
          >
            <option value="">Select a time</option>
            {Array.isArray(availableTimes) &&
              availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
          </select>
          <label htmlFor="occasion">Occasion:</label>
          <textarea
            id="occasion"
            name="occasion"
            value={bookingDetails.occasion}
            onChange={handleBookingChange}
            placeholder="Occasion (Birthday, Anniversary etc.) *Required"
            required
          />
          <label htmlFor="specialRequests">Special Requests:</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={bookingDetails.specialRequests}
            onChange={handleBookingChange}
            placeholder="Special Requests (Optional)"
          />
        </fieldset>

        <fieldset
          className={`personal-details ${
            isBookingDetailsFilled() ? "" : "greyed-out"
          }`}
        >
          <legend>Personal Details</legend>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={personalDetails.firstName}
            onChange={handlePersonalChange}
            placeholder="First Name"
            required
            disabled={!isBookingDetailsFilled()}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={personalDetails.lastName}
            onChange={handlePersonalChange}
            placeholder="Last Name"
            required
            disabled={!isBookingDetailsFilled()}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={personalDetails.email}
            onChange={handlePersonalChange}
            placeholder="Email"
            required
            disabled={!isBookingDetailsFilled()}
          />
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={personalDetails.contactNumber}
            onChange={handlePersonalChange}
            placeholder="Contact Number"
            required
            disabled={!isBookingDetailsFilled()}
          />
        </fieldset>

        <div className="terms">
          <label htmlFor="agreeTerms">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              disabled={!isBookingDetailsFilled()}
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
    </section>
  );
};

export default Main;