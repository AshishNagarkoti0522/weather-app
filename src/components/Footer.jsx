import React from 'react';

function Footer() {
  return (
    <footer>
      <p className="footer-heading"><strong>About WeatherApp</strong></p>
      <p>
        WeatherApp is a sleek, responsive weather forecasting tool that helps users get real-time weather updates
        for any city around the world. Built with React.js and integrated with OpenCage Geocoding and real-time
        Weather APIs, it features dark/light mode, smooth transitions, and a mobile-friendly design.
      </p>
      <p>
        Built as part of an IBM-PBEL Internship project.<br />
        Designed & developed by Ashish Nagarkoti · © 2025
      </p>
      <br></br>
      <p className="footer-contact">
        <i className="fas fa-envelope" style={{ fontSize: '0.85rem', marginRight: '6px' }}></i>
        ashishn0522 [at] gmail [dot] com
      </p>

    </footer>
  );
}

export default Footer;
