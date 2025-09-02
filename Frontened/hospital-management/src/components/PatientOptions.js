// src/components/PatientOptions.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PatientOptions.css";

function PatientOptions() {
  const navigate = useNavigate();

  return (
    <div className="patient-options-container">
      <h1 className="patient-options-title">🌈 Welcome to MediAssist</h1>
      <p className="patient-options-subtitle">
        Your health, your way! Choose an option to continue:
      </p>

      <div className="options-grid">
        <div
          className="option-card gradient-pink"
          onClick={() => navigate("/medibot")}
        >
          <div className="icon">🤖</div>
          <h3>MediBot</h3>
          <p>AI-powered bot to detect symptoms & guide your health.</p>
        </div>

        <div
          className="option-card gradient-blue"
          onClick={() => navigate("/patient-dashboard")}
        >
          <div className="icon">🩺</div>
          <h3>Search Doctor</h3>
          <p>Find trusted doctors & book appointments with ease.</p>
        </div>

        <div
          className="option-card gradient-purple"
          onClick={() => navigate("/reports")}
        >
          <div className="icon">📑</div>
          <h3>View Reports</h3>
          <p>Access your medical reports and prescriptions anytime.</p>
        </div>
      </div>
    </div>
  );
}

export default PatientOptions;
