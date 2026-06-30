import {
  Dashboard,
  People,
  EventAvailable,
  EventNote,
  Payments,
  Description,
  School,
  Work,
  AccountBalance,
  ContactPhone,
  Settings,
  Logout,
} from "@mui/icons-material";

import { Link, useLocation } from "react-router-dom";

import "./Sidebar.css";

const menu = [
  {
    icon: <Dashboard />,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <People />,
    title: "Employees",
    path: "/employees",
  },
  {
    icon: <EventAvailable />,
    title: "Attendance",
    path: "/attendance",
  },
  {
    icon: <EventNote />,
    title: "Leave",
    path: "/leave",
  },
  {
    icon: <Payments />,
    title: "Payroll",
    path: "/payroll",
  },
  {
    icon: <Description />,
    title: "Documents",
    path: "/documents",
  },
  {
    icon: <School />,
    title: "Education",
    path: "/education",
  },
  {
    icon: <Work />,
    title: "Experience",
    path: "/experience",
  },
  {
    icon: <AccountBalance />,
    title: "Bank Details",
    path: "/bank-details",
  },
  {
    icon: <ContactPhone />,
    title: "Emergency Contact",
    path: "/emergency-contact",
  },
];

export default function Sidebar() {

  const location = useLocation();

  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>NexusHR</h2>
        <span>Enterprise HR Platform</span>
      </div>

      <ul className="menu">

        {menu.map((item) => (

          <Link
            key={item.title}
            to={item.path}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >

            <li
              className={
                location.pathname === item.path
                  ? "active"
                  : ""
              }
            >
              {item.icon}

              <span>{item.title}</span>

            </li>

          </Link>

        ))}

      </ul>

      <div className="bottom-menu">

        <button>

          <Settings />

          Settings

        </button>

        <button className="logout">

          <Logout />

          Logout

        </button>

      </div>

    </aside>
  );
}