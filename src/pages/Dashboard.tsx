import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import EmployeeChart from "../components/EmployeeChart";
import LeaveChart from "../components/LeaveChart";
import Statistics from "../components/Statistics";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: "#F4F7FC",
        minHeight: "100vh",
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div
        style={{
          marginLeft: "260px",
          padding: "30px",
          paddingTop: "100px",
        }}
      >
        {/* Welcome Section */}
        <div
          style={{
            background: "linear-gradient(135deg,#2563EB,#3B82F6)",
            color: "white",
            borderRadius: "18px",
            padding: "35px",
            marginBottom: "30px",
            boxShadow: "0 10px 25px rgba(37,99,235,0.25)",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "36px",
            }}
          >
            Welcome Back, Nandini 👋
          </h1>

          <p
            style={{
              marginTop: "12px",
              fontSize: "18px",
              opacity: 0.9,
            }}
          >
            AI-Enabled Enterprise HR & Workforce Intelligence Platform
          </p>

          <p
            style={{
              marginTop: "8px",
              fontSize: "15px",
              opacity: 0.8,
            }}
          >
            Monitor employees, attendance, payroll, leave requests and workforce
            analytics from one intelligent dashboard.
          </p>
        </div>

        {/* KPI Cards */}
        <DashboardCards />

        <div
        style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "25px",
        marginTop: "30px",
  }}
>
  <Statistics />
  <EmployeeChart />

  <LeaveChart />
</div>

        {/* Bottom Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "25px",
            marginTop: "35px",
          }}
        >
          {/* Recent Activities */}
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "25px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Recent Activities</h2>

            <ul
              style={{
                lineHeight: "2.2",
                color: "#555",
                paddingLeft: "20px",
              }}
            >
              <li>✔ Employee John Doe joined HR Department</li>
              <li>✔ Payroll processed successfully</li>
              <li>✔ 7 Leave requests waiting for approval</li>
              <li>✔ Attendance updated for today</li>
              <li>✔ Employee documents verified</li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "25px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2>Quick Actions</h2>

            <button
              style={buttonStyle}
              onClick={() => navigate("/employees")}
              >
              Add Employee
            </button>

            <button
              style={buttonStyle}
            onClick={() => navigate("/attendance")}
>
              Mark Attendance
            </button>

            <button
              style={buttonStyle}
             onClick={() => navigate("/leave")}
>
              Apply Leave
            </button>

            <button
              style={buttonStyle}
              onClick={() => navigate("/payroll")}
>
              Generate Payroll
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "15px",
  border: "none",
  borderRadius: "10px",
  background: "#2563EB",
  color: "#fff",
  fontSize: "15px",
  cursor: "pointer",
};