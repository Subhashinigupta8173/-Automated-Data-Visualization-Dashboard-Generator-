// src/components/ViewReports.js
import React, { useState } from "react";

function ViewReports() {
  const [reports] = useState([
    { id: 1, title: "Blood Test Report", date: "2025-08-15", file: "/reports/blood-test.pdf" },
    { id: 2, title: "X-Ray Report", date: "2025-08-20", file: "/reports/xray-report.pdf" },
    { id: 3, title: "MRI Scan Report", date: "2025-08-28", file: "/reports/mri-scan.pdf" },
  ]);

  return (
    <div className="view-reports" style={{ padding: "20px", textAlign: "center" }}>
      <h1 style={{ color: "#2C3E50", marginBottom: "20px" }}>📑 My Medical Reports</h1>

      {reports.length === 0 ? (
        <p style={{ color: "#7F8C8D" }}>No reports available.</p>
      ) : (
        <div style={{ display: "grid", gap: "15px", maxWidth: "600px", margin: "0 auto" }}>
          {reports.map((report) => (
            <div
              key={report.id}
              style={{
                background: "#F8F9FA",
                borderRadius: "12px",
                padding: "15px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                textAlign: "left",
              }}
            >
              <h3 style={{ margin: "0", color: "#34495E" }}>{report.title}</h3>
              <p style={{ margin: "5px 0", color: "#7F8C8D" }}>📅 {report.date}</p>
              <a
                href={report.file}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "8px 15px",
                  background: "#27AE60",
                  color: "white",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                View Report
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewReports;
