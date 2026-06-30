import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", employees: 35 },
  { month: "Feb", employees: 45 },
  { month: "Mar", employees: 52 },
  { month: "Apr", employees: 68 },
  { month: "May", employees: 80 },
  { month: "Jun", employees: 95 },
];

export default function EmployeeChart() {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0,0,0,.08)",
      }}
    >
      <h2>Employee Growth</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="employees"
            fill="#2563EB"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}