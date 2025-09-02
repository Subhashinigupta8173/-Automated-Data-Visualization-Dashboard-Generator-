// src/components/MediBot.js
import React, { useState } from "react";
import "../styles/MediBot.css";

function MediBot() {
  const [symptoms, setSymptoms] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your symptoms have been submitted. Our MediBot will analyze them soon!");
  };

  return (
    <div className="medibot-container">
      <div className="medibot-card">
        <h1 className="medibot-title">🤖 Welcome to MediBot</h1>
        <p className="medibot-subtitle">
          Your AI-powered health assistant. Describe your symptoms or upload an image for analysis.
        </p>

        <form onSubmit={handleSubmit} className="medibot-form">
          <textarea
            placeholder="Describe your symptoms here..."
            className="medibot-textarea"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            required
          />

          <input
            type="file"
            accept="image/*"
            className="medibot-file"
            onChange={(e) => setImage(e.target.files[0])}
          />

          {image && (
            <p className="file-info">📂 Selected file: {image.name}</p>
          )}

          <button type="submit" className="medibot-btn">Submit Symptoms</button>
        </form>
      </div>
    </div>
  );
}

export default MediBot;
