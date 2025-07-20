import React from 'react';
import './Booking.css';

const Booking = () => {
  return (
    <div className="bookings-container">
      <h2>My Bookings</h2>

      <div className="bookings-list">

        <div className="booking-card">
          <div className="booking-info">
            <h3>Plumbing Service</h3>
            <p><strong>Date:</strong> 20 July 2025</p>
            <p className="status status-pending">Pending</p>
          </div>
        </div>

        <div className="booking-card">
          <div className="booking-info">
            <h3>Electrician Service</h3>
            <p><strong>Date:</strong> 18 July 2025</p>
            <p className="status status-completed">Completed</p>
          </div>
        </div>

        <div className="booking-card">
          <div className="booking-info">
            <h3>AC Repair Service</h3>
            <p><strong>Date:</strong> 15 July 2025</p>
            <p className="status status-cancelled">Cancelled</p>
          </div>
        </div>

        <div className="booking-card">
          <div className="booking-info">
            <h3>Gas Stove Installation</h3>
            <p><strong>Date:</strong> 12 July 2025</p>
            <p className="status status-completed">Completed</p>
          </div>
        </div>

        <div className="booking-card">
          <div className="booking-info">
            <h3>Massage Service</h3>
            <p><strong>Date:</strong> 10 July 2025</p>
            <p className="status status-pending">Pending</p>
          </div>
        </div>

        <div className="booking-card">
          <div className="booking-info">
            <h3>Carpentry Work</h3>
            <p><strong>Date:</strong> 08 July 2025</p>
            <p className="status status-cancelled">Cancelled</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Booking;
