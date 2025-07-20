import React, { useState } from 'react';
import './Services.css';

import most1_img from '../../assets/room.png';
import most2_img from '../../assets/foam.png';
import most3_img from '../../assets/pest.png';
import most4_img from '../../assets/gas.png';
import most5_img from '../../assets/massage.png';
import most6_img from '../../assets/repair4.png';
import most7_img from '../../assets/apartment.png';

import repair1 from '../../assets/repair1.png';
import repair2 from '../../assets/repair2.png';
import repair3 from '../../assets/repair3.png';
import repair4 from '../../assets/repair4.png';
import repair5 from '../../assets/repair5.png';
import repair6 from '../../assets/repair6.png';
import repair7 from '../../assets/repair7.png';
import repair8 from '../../assets/repair8.png';
import repair9 from '../../assets/repair9.png';

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
  },
  {
    id: 8,
    name: "AC switchbox installation",
    image: repair1,
    description: "AC switchbox repair and installation.",
    price: "₹249"
  },
  {
    id: 9,
    name: "Flush tank repair",
    image: repair2,
    description: "Fixing leaking or broken flush tanks.",
    price: "₹199"
  },
  {
    id: 10,
    name: "Cupboard hinge installation",
    image: repair3,
    description: "Install or replace cupboard hinges.",
    price: "₹129"
  },
  {
    id: 11,
    name: "Fan repair",
    image: repair4,
    description: "Ceiling and table fan repair services.",
    price: "₹109"
  },
  {
    id: 12,
    name: "Curtain rod installation",
    image: repair5,
    description: "Install curtain rods and accessories.",
    price: "₹129"
  },
  {
    id: 13,
    name: "Tap repair",
    image: repair6,
    description: "Fix leaky or broken taps.",
    price: "₹49"
  },
  {
    id: 14,
    name: "Tap installation",
    image: repair7,
    description: "Install new kitchen or bathroom taps.",
    price: "₹59"
  },
  {
    id: 15,
    name: "Drill and hang",
    image: repair8,
    description: "Drilling and hanging photo frames, etc.",
    price: "₹49"
  },
  {
    id: 16,
    name: "Stabiliser installation",
    image: repair9,
    description: "Install voltage stabilizers for appliances.",
    price: "₹119"
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
