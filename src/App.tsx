import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Payroll from "./pages/Payroll";
import Documents from "./pages/Documents";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import BankDetails from "./pages/BankDetails";
import EmergencyContact from "./pages/EmergencyContact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/bank-details" element={<BankDetails />} />
        <Route path="/emergency-contact" element={<EmergencyContact />} />
      </Routes>
    </BrowserRouter>  );
}

export default App;