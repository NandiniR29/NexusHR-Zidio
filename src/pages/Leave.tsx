import React from "react";
import { Add, Search, Edit, Delete } from "@mui/icons-material";

const leaves = [
  {
    id: 1,
    employee: "John Smith",
    type: "Casual Leave",
    from: "2026-06-29",
    to: "2026-07-01",
    days: 3,
    reason: "Family Function",
    status: "Approved",
  },
  {
    id: 2,
    employee: "Emma Watson",
    type: "Sick Leave",
    from: "2026-07-05",
    to: "2026-07-06",
    days: 2,
    reason: "Fever",
    status: "Pending",
  },
  {
    id: 3,
    employee: "David Miller",
    type: "Earned Leave",
    from: "2026-07-10",
    to: "2026-07-12",
    days: 3,
    reason: "Vacation",
    status: "Rejected",
  },
];

export default function Leave() {
  return (
    <div
      style={{
        marginLeft: "260px",
        padding: "35px",
        background: "#F4F7FC",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ marginBottom: "5px" }}>Leave Management</h1>

      <p style={{ color: "#666", marginBottom: "25px" }}>
        Manage employee leave requests.
      </p>

      {/* Top Section */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "25px",
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
            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
          }}
        >
          <Search />

          <input
            placeholder="Search Leave..."
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
            padding: "12px 22px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Add />
          Apply Leave
        </button>
      </div>

      {/* Table */}

      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
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
              <th style={th}>Leave Type</th>
              <th style={th}>From</th>
              <th style={th}>To</th>
              <th style={th}>Days</th>
              <th style={th}>Reason</th>
              <th style={th}>Status</th>
              <th style={th}>Action</th>
            </tr>
          </thead>

          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id}>
                <td style={td}>{leave.employee}</td>
                <td style={td}>{leave.type}</td>
                <td style={td}>{leave.from}</td>
                <td style={td}>{leave.to}</td>
                <td style={td}>{leave.days}</td>
                <td style={td}>{leave.reason}</td>

                <td style={td}>
                  <span
                    style={{
                      padding: "6px 14px",
                      borderRadius: "20px",
                      background:
                        leave.status === "Approved"
                          ? "#DCFCE7"
                          : leave.status === "Pending"
                          ? "#FEF3C7"
                          : "#FEE2E2",

                      color:
                        leave.status === "Approved"
                          ? "#15803D"
                          : leave.status === "Pending"
                          ? "#B45309"
                          : "#DC2626",
                    }}
                  >
                    {leave.status}
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
    </div>
  );
}

const th: React.CSSProperties = {
  padding: "15px",
  textAlign: "left",
};

const td: React.CSSProperties = {
  padding: "15px",
  borderBottom: "1px solid #eee",
};

const editBtn: React.CSSProperties = {
  background: "#16A34A",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "8px",
  marginRight: "8px",
  cursor: "pointer",
};

const deleteBtn: React.CSSProperties = {
  background: "#DC2626",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "8px",
  cursor: "pointer",
};