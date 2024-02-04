import React from 'react';
import "../components/css/Footer.css";

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="opening-times">
                        <h5>OPENING TIMES</h5>
                        <ul>
                            <li>Mon - Wed: 10:30AM - 23:00PM</li>
                            <li>Fri: 12:00PM - 1:00AM</li>
                            <li>Sat - Sun: 10:30AM - 23:00PM</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>123 Street - Chicago</li>
                            <li>Tel: 321 321 3210</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
            </div>
            <div className="copyright">
                <p>© 2024 Little Lemon Ltd. All rights reserved.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
