import {
  People,
  CheckCircle,
  EventBusy,
  Payments,
} from "@mui/icons-material";

import "./DashboardCards.css";

const cards = [
  {
    title: "Total Employees",
    value: "125",
    color: "#2563EB",
    icon: <People />,
  },
  {
    title: "Present Today",
    value: "118",
    color: "#16A34A",
    icon: <CheckCircle />,
  },
  {
    title: "Leave Requests",
    value: "07",
    color: "#F59E0B",
    icon: <EventBusy />,
  },
  {
    title: "Payroll",
    value: "Completed",
    color: "#7C3AED",
    icon: <Payments />,
  },
];

export default function DashboardCards() {
  return (
    <div className="card-container">
      {cards.map((card) => (
        <div
          key={card.title}
          className="dashboard-card"
          style={{ borderTop: `5px solid ${card.color}` }}
        >
          <div
            className="icon-box"
            style={{ background: card.color }}
          >
            {card.icon}
          </div>

          <div>
            <h4>{card.title}</h4>

            <h2 style={{ color: card.color }}>
              {card.value}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}