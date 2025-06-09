import React, { useState } from "react";
import "./Services.css";

const services = [
  {
    id: 1,
    name: "Plumbing",
    image: "/images/plumbing.jpg",
    description: "Fix leaks, install fixtures, and more.",
  },
  {
    id: 2,
    name: "Electrician",
    image: "/images/electrician.jpg",
    description: "Lighting, wiring, and appliance repair.",
  },
  {
    id: 3,
    name: "House Cleaning",
    image: "/images/cleaning.jpg",
    description: "Deep cleaning and regular cleaning services.",
  },
  {
    id: 4,
    name: "Pest Control",
    image: "/images/pestcontrol.jpg",
    description: "Eliminate pests from your home safely and effectively.",
  },
  {
    id: 5,
    name: "AC Repair",
    image: "/images/acrepair.jpg",
    description: "Maintenance and repair for all air conditioning units.",
  },
  {
    id: 6,
    name: "Carpentry",
    image: "/images/carpentry.jpg",
    description: "Furniture repair and custom woodwork.",
  },
  {
    id: 7,
    name: "Painting",
    image: "/images/painting.jpg",
    description: "Interior and exterior painting services.",
  },
  {
    id: 8,
    name: "Laundry",
    image: "/images/laundry.jpg",
    description: "Pick-up and drop laundry and dry-cleaning service.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleBookClick = (service) => {
    setSelectedService(service);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const location = e.target.location.value;
    const payment = e.target.payment.value;

    const booking = {
      service: selectedService.name,
      date: new Date().toISOString().slice(0, 10),
      status: "Confirmed",
      location,
      payment,
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...existingBookings, booking]));

    alert("Booking submitted!");
    setSelectedService(null);
  };

  return (
    <div className="myservices-container">
      <h2>Our Services</h2>
      <div className="myservices-grid">
        {services.map((service) => (
          <div className="myservices-card" key={service.id}>
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <button onClick={() => handleBookClick(service)}>Book Appointment</button>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="myservices-modal">
          <div className="myservices-form">
            <h3>Book {selectedService.name}</h3>
            <form onSubmit={handleFormSubmit}>
              <input type="text" name="location" placeholder="Enter your location" required />
              <select name="payment" required>
                <option value="">Select Payment Method</option>
                <option value="UPI">UPI</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Cash">Cash on Service</option>
              </select>
              <button type="submit">Confirm Booking</button>
              <button type="button" onClick={() => setSelectedService(null)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
