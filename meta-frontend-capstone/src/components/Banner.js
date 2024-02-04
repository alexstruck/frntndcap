import React from 'react';
import "../components/css/Banner.css";
import { NavLink } from 'react-router-dom';
import banner from "../assets/banner.jpg"

const Banner = () => {
  return (
    <div className="hero-section-background" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-section-container">
            <div className="section-left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>family owned Mediterranean restaurant</p>
                <NavLink to="/reservations"><button className="btn">Reserve a Table</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Banner
