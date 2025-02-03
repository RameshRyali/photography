// Service.jsx
import React from "react";
import Event from '../assests/services/event.jpg';
import indoor from '../assests/services/indoor.jpg';
import outdoor from '../assests/services/outdoor1.jpg';
import '../styles/service.css';

const Service = () => { // Use uppercase "Service"
    return (
        <section className="services" id="services">
            <div className="text">
                <h1>Our Services</h1>
                <p>Our photographers are available to capture your moments whenever and wherever you need, offering flexible
                    scheduling to fit seamlessly into your plans</p>
            </div>
            <div className="services-container">
                <div className="service-card">
                    <h3>Event Photographers</h3>
                    <img src={Event} alt="Event Photographers" className="service-image" />
                    <p>Our event photographers capture every important moment, ensuring that your memories are preserved in
                        high-quality images.</p>
                </div>

                <div className="service-card">
                    <h3>Outdoor Photographers</h3>
                    <img src={outdoor} alt="Outdoor Photographers" className="service-image" />
                    <p>Our outdoor photographers are skilled in capturing the beauty of nature and outdoor events in a
                        stunning way.</p>
                </div>

                <div className="service-card">
                    <h3>Indoor Photographers</h3>
                    <img src={indoor} alt="Indoor Photographers" className="service-image" />
                    <p>Indoor photography that brings out the best lighting and angles for your indoor events or portraits.</p>
                </div>
            </div>
        </section>
    );
};

export default Service; // Export with uppercase "Service"