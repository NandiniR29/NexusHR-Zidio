import {
  Notifications,
  Search,
  Settings,
} from "@mui/icons-material";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">

      <div className="search-box">

        <Search />

        <input
          type="text"
          placeholder="Search employee, payroll, attendance..."
        />

      </div>

      <div className="navbar-right">

        <div className="notification">

          <Notifications />

          <span className="badge">3</span>

        </div>

        <div className="profile">

          <div className="avatar">

            NR

          </div>

          <div>

            <h4>Nandini R</h4>

            <p>Administrator</p>

          </div>

        </div>

        <Settings className="setting-icon"/>

      </div>

    </div>
  );
}