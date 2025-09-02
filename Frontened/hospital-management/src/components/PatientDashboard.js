// src/components/PatientDashboard.js
import React from "react";
import "../styles/Dashboard.css";

function PatientDashboard() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">👤 Patient Dashboard</h2>

      <div className="dashboard-grid">
        {/* Card 1 - Appointments */}
        <div className="card">
          <h3>📅 My Appointments</h3>
          <p>2 Upcoming Appointments</p>
          <button className="card-btn">View Schedule</button>
        </div>

        {/* Card 2 - Prescriptions */}
        <div className="card">
          <h3>💊 Prescriptions</h3>
          <p>Check your medicines & dosage</p>
          <button className="card-btn">View Prescriptions</button>
        </div>

        {/* Card 3 - Reports */}
        <div className="card">
          <h3>📑 Medical Reports</h3>
          <p>Download and upload reports</p>
          <button className="card-btn">View Reports</button>
        </div>

        {/* Card 4 - Profile */}
        <div className="card">
          <h3>⚙️ Profile</h3>
          <p>Update your personal details</p>
          <button className="card-btn">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
