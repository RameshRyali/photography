import React from 'react';
import Phone from '../assests/contact/call.jpg';
import Email from '../assests/contact/email.jpg';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section>
        <h1 id="title">Contact Us</h1>
      <div className="container">
        <div className="contactInfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span></span>
                <span>
                  8 Sutherland Street<br />
                  Melbourne, Victoria<br />
                  3000
                </span>
              </li>
              <li>
                <span><img src={Email} alt="Email" /></span>
                <span>photographerbooking@gmail.com</span>
              </li>
              <li>
                <span><img src={Phone} alt="Phone" /></span>
                <span>+91 87243698123</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="contactForm">
          <h2>Send a Message</h2>
          <div className="formBox">
            <div className="inputBox w50">
              <input type="text" required />
              <span>First Name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" required />
              <span>Last Name</span>
            </div>
            <div className="inputBox w50">
              <input type="email" required />
              <span>Email</span>
            </div>
            <div className="inputBox w50">
              <input type="text" required />
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w100">
              <textarea required></textarea>
              <span>Write Your Message Here.</span>
            </div>
            <div className="inputBox w100">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;