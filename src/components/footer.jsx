import React from "react";
import Facebook from "../assests/footer/fb.jpg";
import Linkedin from "../assests/footer/linkedin.jpg";
import Twitter from "../assests/footer/twitter.jpg";
import "../styles/footer.css";


const Footer = () => {
    return(
        <section className="foot">
        <footer>
            <div className="footer-bottom">
                <p>&copy; 2024 photo – Capturing Moments, Creating Memories</p>
                <ul className="policies">
                    <li>Terms and Conditions &</li>
                    <li>Privacy Policy &</li>
                    <li>Refund and Return Policy &</li>
                    <li>Shipping Policy</li>
                </ul>
                <div className="social-media">
                    <a href="#"><img src={Facebook} alt="facebook"/></a>
                    <a href="#"><img src={Linkedin} alt="Linkedin"/></a>
                    <a href="#"><img src={Twitter} alt="Twitter"/></a>
                </div>
            </div>
        </footer>
    </section>
    );
};

export default Footer;