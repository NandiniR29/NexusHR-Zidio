import { Search, Add, Edit, Delete } from "@mui/icons-material";

const payroll = [
  {
    id: 101,
    employee: "John Smith",
    month: "June",
    basic: 45000,
    bonus: 5000,
    deduction: 2000,
    net: 48000,
    status: "Paid",
  },
  {
    id: 102,
    employee: "Emma Watson",
    month: "June",
    basic: 55000,
    bonus: 4000,
    deduction: 3000,
    net: 56000,
    status: "Paid",
  },
  {
    id: 103,
    employee: "David Miller",
    month: "June",
    basic: 38000,
    bonus: 3000,
    deduction: 1500,
    net: 39500,
    status: "Pending",
  },
];

export default function Payroll() {
  return (
    <div
      style={{
        marginLeft: "260px",
        padding: "35px",
        background: "#F4F7FC",
        minHeight: "100vh",
      }}
    >
      <h1>Payroll Management</h1>

      <p style={{ color: "#666" }}>
        Manage salary, bonus and payroll information.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "25px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            padding: "12px 15px",
            borderRadius: "10px",
            width: "350px",
          }}
        >
          <Search />

          <input
            placeholder="Search Payroll..."
            style={{
              border: "none",
              outline: "none",
              marginLeft: "10px",
              width: "100%",
            }}
          />
        </div>

        <button
          style={{
            background: "#2563EB",
            color: "#fff",
            border: "none",
            padding: "12px 18px",
            borderRadius: "10px",
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <Add />
          Generate Payroll
        </button>
      </div>

      <table
        style={{
          width: "100%",
          background: "#fff",
          borderCollapse: "collapse",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <thead
          style={{
            background: "#2563EB",
            color: "#fff",
          }}
        >
          <tr>
            <th style={th}>Employee</th>
            <th style={th}>Month</th>
            <th style={th}>Basic</th>
            <th style={th}>Bonus</th>
            <th style={th}>Deduction</th>
            <th style={th}>Net Salary</th>
            <th style={th}>Status</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {payroll.map((row) => (
            <tr key={row.id}>
              <td style={td}>{row.employee}</td>
              <td style={td}>{row.month}</td>
              <td style={td}>₹ {row.basic}</td>
              <td style={td}>₹ {row.bonus}</td>
              <td style={td}>₹ {row.deduction}</td>
              <td style={td}>₹ {row.net}</td>

              <td style={td}>
                <span
                  style={{
                    background:
                      row.status === "Paid"
                        ? "#DCFCE7"
                        : "#FEF3C7",
                    color:
                      row.status === "Paid"
                        ? "#16A34A"
                        : "#D97706",
                    padding: "6px 12px",
                    borderRadius: "20px",
                  }}
                >
                  {row.status}
                </span>
              </td>

              <td style={td}>
                <button style={editBtn}>
                  <Edit />
                </button>

                <button style={deleteBtn}>
                  <Delete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  padding: "15px",
  textAlign: "left" as const,
};

const td = {
  padding: "15px",
  borderBottom: "1px solid #eee",
};

const editBtn = {
  background: "#16A34A",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "8px",
  marginRight: "8px",
  cursor: "pointer",
};

const deleteBtn = {
  background: "#DC2626",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "8px",
  cursor: "pointer",
};