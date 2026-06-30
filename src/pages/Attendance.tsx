import { Add, Search, Edit, Delete } from "@mui/icons-material";

const attendance = [
  {
    id: 1,
    employee: "John Smith",
    date: "2026-06-29",
    checkIn: "09:00 AM",
    checkOut: "06:00 PM",
    status: "Present",
  },
  {
    id: 2,
    employee: "Emma Watson",
    date: "2026-06-29",
    checkIn: "09:15 AM",
    checkOut: "06:05 PM",
    status: "Late",
  },
  {
    id: 3,
    employee: "David Miller",
    date: "2026-06-29",
    checkIn: "--",
    checkOut: "--",
    status: "Absent",
  },
];

export default function Attendance() {
  return (
    <div
      style={{
        marginLeft: "260px",
        padding: "35px",
        background: "#F4F7FC",
        minHeight: "100vh",
      }}
    >
      <h1>Attendance Management</h1>

      <p style={{ color: "#666" }}>
        Track daily employee attendance.
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
            padding: "12px 18px",
            borderRadius: "10px",
            width: "350px",
          }}
        >
          <Search />
          <input
            placeholder="Search Employee..."
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
            borderRadius: "10px",
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Add />
          Mark Attendance
        </button>
      </div>

      <table
        style={{
          width: "100%",
          background: "#fff",
          borderCollapse: "collapse",
          borderRadius: "10px",
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
            <th style={th}>Date</th>
            <th style={th}>Check In</th>
            <th style={th}>Check Out</th>
            <th style={th}>Status</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {attendance.map((row) => (
            <tr key={row.id}>
              <td style={td}>{row.employee}</td>
              <td style={td}>{row.date}</td>
              <td style={td}>{row.checkIn}</td>
              <td style={td}>{row.checkOut}</td>

              <td style={td}>
                <span
                  style={{
                    background:
                      row.status === "Present"
                        ? "#DCFCE7"
                        : row.status === "Late"
                        ? "#FEF3C7"
                        : "#FEE2E2",
                    color:
                      row.status === "Present"
                        ? "#16A34A"
                        : row.status === "Late"
                        ? "#D97706"
                        : "#DC2626",
                    padding: "5px 12px",
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