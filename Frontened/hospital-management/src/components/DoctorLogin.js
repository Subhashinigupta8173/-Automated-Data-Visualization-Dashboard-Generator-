// src/components/DoctorLogin.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

function DoctorLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/doctor-dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">👨‍⚕️ Doctor Login</h2>
        <p className="login-subtitle">Welcome back! Please log in to continue.</p>

        <form onSubmit={handleLogin} className="login-form">
          <input type="text" placeholder="Enter your username" className="input-field" required />
          <input type="password" placeholder="Enter your password" className="input-field" required />
          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="signup-link">
          Don’t have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}

export default DoctorLogin;
