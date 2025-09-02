// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">🏥 Welcome to <span>MediAssist</span></h1>
        <p className="home-subtitle">
          Your trusted healthcare companion.  
          Manage appointments, prescriptions, and reports — all in one place.
        </p>

        <div className="home-buttons">
          <Link to="/doctor-login" className="home-btn doctor-btn">
            👨‍⚕️ Doctor Login
          </Link>
          <Link to="/patient-login" className="home-btn patient-btn">
            👤 Patient Login
          </Link>
          <Link to="/signup" className="home-btn signup-btn">
            ✨ Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
