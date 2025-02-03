import React from "react";
import "../styles/about.css";

const About = () => {
    return (
        <section className="about" id="about">
        <div className="text">
            <h1>About Us</h1>
            <p>Our mission is to enable people preserve their precious memories in true to life quality.</p>
        </div>
        <div className="about-container">
            <div className="box">
                <div className="box-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="bx bx-globe"><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>
                </div>
                <h2><span>Explore</span></h2>
                <p>Browse through our diverse pool of talented photographers, each with their unique style and
                    expertise.</p>
            </div>
            <div className="box">
                <div className="box-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="bx bx-customize"><path d="M392 32H56C25.1 32 0 57.1 0 88v336c0 30.9 25.1 56 56 56h336c30.9 0 56-25.1 56-56V88c0-30.9-25.1-56-56-56zm-108.3 82.1c0-19.8 29.9-19.8 29.9 0v199.5c0 19.8-29.9 19.8-29.9 0V114.1zm-74.6-7.5c0-19.8 29.9-19.8 29.9 0v216.5c0 19.8-29.9 19.8-29.9 0V106.6zm-74.7 7.5c0-19.8 29.9-19.8 29.9 0v199.5c0 19.8-29.9 19.8-29.9 0V114.1zM59.7 144c0-19.8 29.9-19.8 29.9 0v134.3c0 19.8-29.9 19.8-29.9 0V144zm323.4 227.8c-72.8 63-241.7 65.4-318.1 0-15-12.8 4.4-35.5 19.4-22.7 65.9 55.3 216.1 53.9 279.3 0 14.9-12.9 34.3 9.8 19.4 22.7zm5.2-93.5c0 19.8-29.9 19.8-29.9 0V144c0-19.8 29.9-19.8 29.9 0v134.3z"/></svg>
                </div>
                <h2><span>Customize</span></h2>
            
                <p> Filter by location, event type, budget, or photography style to find the perfect match for your
                    needs.</p>
            </div>
            <div className="box">
                <div className="box-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="bx bx-book"><path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                </div>
                <h2><span>Book</span></h2>
                <p>Secure your photographer with just a few clicks, and enjoy seamless communication to plan the details
                    of your session.</p>
            </div>
        </div>
    </section>
    );
};

export default About;