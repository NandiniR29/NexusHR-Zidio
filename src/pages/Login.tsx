import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import "./../styles/login.css";

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const handleLogin = async () => {
  try {
    const res = await login(username, password);

    localStorage.setItem("token", res.token);
    localStorage.setItem("username", res.username);
    localStorage.setItem("role", res.role);

    alert("Login Successful");

    navigate("/dashboard");
  } catch (error: any) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      error.response?.data ||
      "Invalid Username or Password"
    );
  }
};

  return (
    <div className="login-container">

      <div className="left-panel">

        <h1>NexusHR</h1>

        <p>Enterprise Human Resource Management System</p>

        <br />

        <p>✔ Employee Management</p>
        <p>✔ Attendance Tracking</p>
        <p>✔ Leave Management</p>
        <p>✔ Payroll Management</p>
        <p>✔ AI Workforce Analytics</p>

      </div>

      <div className="right-panel">

        <div className="login-card">

          <h2>Welcome Back</h2>

          <input
            className="input-box"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="input-box"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login-btn"
            onClick={handleLogin}
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
}