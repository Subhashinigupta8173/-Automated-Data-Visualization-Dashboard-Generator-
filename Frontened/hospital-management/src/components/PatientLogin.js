// src/components/PatientLogin.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

function PatientLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // redirect after login
    navigate("/patient-options"); // 👈 now goes to patient options page
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">👤 Patient Login</h2>
        <p className="login-subtitle">Access your appointments and reports</p>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Enter your username"
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="input-field"
            required
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="signup-link">
          Don’t have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}

export default PatientLogin;
