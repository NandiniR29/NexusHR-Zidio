import {
  TrendingUp,
  PersonAdd,
  WorkHistory,
  Paid,
} from "@mui/icons-material";

const cards = [
  {
    title: "New Employees",
    value: "12",
    icon: <PersonAdd />,
    color: "#2563EB",
  },
  {
    title: "Attendance Rate",
    value: "94%",
    icon: <TrendingUp />,
    color: "#16A34A",
  },
  {
    title: "Projects",
    value: "18",
    icon: <WorkHistory />,
    color: "#F59E0B",
  },
  {
    title: "Monthly Salary",
    value: "₹12.8L",
    icon: <Paid />,
    color: "#7C3AED",
  },
];

export default function Statistics() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          style={{
            background: "#fff",
            borderRadius: "15px",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: "#666",
                fontSize: "14px",
              }}
            >
              {card.title}
            </p>

            <h2
              style={{
                color: card.color,
                marginTop: "10px",
              }}
            >
              {card.value}
            </h2>
          </div>

          <div
            style={{
              background: card.color,
              color: "#fff",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}