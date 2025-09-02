// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DoctorLogin from "./components/DoctorLogin";
import PatientLogin from "./components/PatientLogin";
import Signup from "./components/Signup";
import DoctorDashboard from "./components/DoctorDashboard";
import PatientDashboard from "./components/PatientDashboard";
import PatientOptions from "./components/PatientOptions"; 
import MediBot from "./components/MediBot";
import ViewReports from "./components/ViewReports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/patient-options" element={<PatientOptions />} /> 
        <Route path="/medibot" element={<MediBot />} />
        <Route path="/view-reports" element={<ViewReports />} />

      </Routes>
    </Router>
  );
}

export default App;
