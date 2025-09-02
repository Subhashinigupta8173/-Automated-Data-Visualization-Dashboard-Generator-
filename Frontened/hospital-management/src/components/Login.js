import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [role, setRole] = useState("patient");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "patient") navigate("/patient");
    else navigate("/doctor");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Hospital Management</h1>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Enter Username"
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="input-field"
            required
          />

          <div className="role-selection">
            <label>
              <input
                type="radio"
                value="patient"
                checked={role === "patient"}
                onChange={(e) => setRole(e.target.value)}
              />
              Patient
            </label>
            <label>
              <input
                type="radio"
                value="doctor"
                checked={role === "doctor"}
                onChange={(e) => setRole(e.target.value)}
              />
              Doctor
            </label>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
