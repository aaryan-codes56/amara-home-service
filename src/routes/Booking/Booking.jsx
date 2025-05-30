import React, { useState } from 'react';
import './Booking.css';

const initialBookings = [
  {
    service: "AC Repair & Installation",
    date: "2025-05-10",
    status: "Completed"
  },
  {
    service: "Plumbing Services",
    date: "2025-04-25",
    status: "Completed"
  },
  {
    service: "Electrical Fixes",
    date: "2025-04-01",
    status: "Cancelled"
  },
];

const Booking = () => {
  const [bookings, setBookings] = useState(initialBookings);

  const cancelBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
  };

  return (
    <div className="bookings-page">
      <h2>My Bookings</h2>
      <div className="bookings-list">
        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          bookings.map((booking, index) => (
            <div key={index} className="booking-card">
              <h3>{booking.service}</h3>
              <p>Date: {booking.date}</p>
              <p>Status: <span className={`status ${booking.status.toLowerCase()}`}>{booking.status}</span></p>
              <button className="cancel-btn" onClick={() => cancelBooking(index)}>Cancel Booking</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Booking;
