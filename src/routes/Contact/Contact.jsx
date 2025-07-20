import React from 'react';
import './Contact.css';



const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ff0f3486-14d4-4f6d-b233-ffb398a4973b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container">
      <form onSubmit={onSubmit}>
      <div className="contact-form">
        <h1>Contact us</h1>

        <label>Full Name</label>
        <input type="text" placeholder="Enter full name" />

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email address" />

        <label>Enter Phone Number</label>
        <div className="phone-input">
          <input type="tel" placeholder="Phone Number" />
        </div>

        <label>Enter Message</label>
        <textarea placeholder="Enter message" rows="5" />

        <button type="submit">Submit</button>
      </div>
      </form>
      <span>{result}</span>

      <div className="contact-info-cards">
        <div className="info-card">
          <h4>Need help?</h4>
          <p>
            For any immediate help regarding your bookings, please log in and visit our Help Center.
            <br />
            <a href="#">Open Help Center →</a>
          </p>
        </div>

        <div className="info-card">
          <h4>Still facing issues?</h4>
          <p>
            Please send us an email on <strong>resolve@amara.com</strong>. We will get back to you within 24–48 hours.
          </p>
        </div>

        <div className="info-card">
          <h4>Media inquiries</h4>
          <p>
            For media inquiries, you can send us an email on <strong>press@amara.com</strong>.
          </p>
        </div>

        <div className="info-card">
          <h4>What is our helpline number?</h4>
          <p>
            We have switched from a customer care phone number to a fast, simple-to-use chat-based support system.
          </p>
        </div>

        <div className="info-card">
          <h4>Our office addresses</h4>
          <p>
            You can view a list of all our office addresses by clicking below.
            <br />
            <a href="#">View addresses →</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
