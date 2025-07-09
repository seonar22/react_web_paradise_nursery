import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // For styling the landing page

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Your one-stop shop for beautiful and healthy houseplants.</p>
        <Link to="/products" className="shop-now-button">
          Shop Now
        </Link>
      </header>
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          We offer a wide selection of indoor plants, from air-purifying varieties to rare exotic
          species. Find the perfect green companion for your home or office.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;