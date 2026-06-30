import React from "react";
import { Add, Search, Edit, Delete } from "@mui/icons-material";

const education = [
  {
    id: 1,
    employee: "John Smith",
    qualification: "MCA",
    institution: "VVCE Mysore",
    university: "VTU",
    year: 2025,
    percentage: "82%",
  },
  {
    id: 2,
    employee: "Emma Watson",
    qualification: "B.Tech",
    institution: "MIT",
    university: "MIT University",
    year: 2023,
    percentage: "88%",
  },
  {
    id: 3,
    employee: "David Miller",
    qualification: "MBA",
    institution: "IIM Bangalore",
    university: "IIM",
    year: 2022,
    percentage: "91%",
  },
];

export default function Education() {
  return (
    <div
      style={{
        marginLeft: "260px",
        padding: "35px",
        background: "#F4F7FC",
        minHeight: "100vh",
      }}
    >
      <h1>Education Management</h1>

      <p style={{ color: "#666", marginBottom: "20px" }}>
        Manage employee educational qualifications.
      </p>

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
            placeholder="Search Education..."
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
            padding: "12px 20px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          <Add />
          Add Education
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
            <th style={th}>Qualification</th>
            <th style={th}>Institution</th>
            <th style={th}>University</th>
            <th style={th}>Year</th>
            <th style={th}>Percentage</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {education.map((row) => (
            <tr key={row.id}>
              <td style={td}>{row.employee}</td>
              <td style={td}>{row.qualification}</td>
              <td style={td}>{row.institution}</td>
              <td style={td}>{row.university}</td>
              <td style={td}>{row.year}</td>
              <td style={td}>{row.percentage}</td>

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