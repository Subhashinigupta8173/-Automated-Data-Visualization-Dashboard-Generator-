import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // for now just log data (later connect to backend)
    console.log("Signup Data:", formData);
    alert("Signup successful!");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="signup-title">Hospital Management</h1>
        <p className="signup-subtitle">Create an account to continue</p>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="signup-form">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-field"
          />

          <button type="submit" className="signup-btn full-btn">
            Sign Up
          </button>
        </form>

        {/* Role Buttons */}
        <p className="signup-subtitle">Already have an account? Login below:</p>
        <div className="signup-buttons">
          <button
            className="signup-btn doctor-btn"
            onClick={() => navigate("/doctor-login")}
          >
            👨‍⚕️ Login as Doctor
          </button>
          <button
            className="signup-btn patient-btn"
            onClick={() => navigate("/patient-login")}
          >
            🧑‍🦽 Login as Patient
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
