import React, { useState } from 'react';
import './Services.css';

import most1_img from '../../assets/room.png';
import most2_img from '../../assets/foam.png';
import most3_img from '../../assets/pest.png';
import most4_img from '../../assets/gas.png';
import most5_img from '../../assets/massage.png';
import most6_img from '../../assets/repair4.png';
import most7_img from '../../assets/apartment.png';

const services = [
  {
    id: 1,
    name: "Painting",
    image: most1_img,
    description: "Interior and exterior wall painting.",
    price: "₹1200"
  },
  {
    id: 2,
    name: "Foam-Jet AC Service",
    image: most2_img,
    description: "AC deep cleaning & servicing.",
    price: "₹899"
  },
  {
    id: 3,
    name: "Pest Control",
    image: most3_img,
    description: "Get rid of cockroaches, termites.",
    price: "₹999"
  },
  {
    id: 4,
    name: "Gas Refill & Check-Up",
    image: most4_img,
    description: "Refill and safety check of LPG.",
    price: "₹699"
  },
  {
    id: 5,
    name: "Swedish Massage",
    image: most5_img,
    description: "Relaxing full-body stress relief massage.",
    price: "₹1499"
  },
  {
    id: 6,
    name: "Electrician Service",
    image: most6_img,
    description: "Wiring, switches, light fitting & repair.",
    price: "₹499"
  },
  {
    id: 7,
    name: "Home Deep Cleaning",
    image: most7_img,
    description: "Room, kitchen & bathroom deep cleaning.",
    price: "₹1799"
  }
];

const Services = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: ''
  });

  const handleBookClick = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setFormData({ name: '', address: '', contact: '' });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Booking for: ${selectedService.name}`);
    console.log(formData);
    alert(`Appointment booked for ${selectedService.name} at ${selectedService.price}`);
    handleCloseForm();
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
            <p className="price">Price: {service.price}</p>
            <button className="book-btn" onClick={() => handleBookClick(service)}>
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="form-overlay">
          <div className="form-popup">
            <h3>Book {selectedService.name}</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                required
              />
              <div className="form-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={handleCloseForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
