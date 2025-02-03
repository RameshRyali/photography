import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/homepage/logo1.jpg";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div className="header">
            <Link to="/" className="logo"><img src={Logo} alt="Logo" /></Link>
            <div className="para">
                <p>CLICK YOUR MOMENTS</p>
            </div>
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Services</Link></li> {/* Ensure path matches route */}
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="header-btn">
                <Link to="/login" className="login">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
