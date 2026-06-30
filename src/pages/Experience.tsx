import React from "react";
import { Add, Search, Edit, Delete } from "@mui/icons-material";

const experiences = [
  {
    id: 1,
    employee: "John Smith",
    company: "Infosys",
    designation: "Software Engineer",
    department: "IT",
    experience: "3 Years",
    type: "Full Time",
  },
  {
    id: 2,
    employee: "Emma Watson",
    company: "TCS",
    designation: "System Analyst",
    department: "Development",
    experience: "5 Years",
    type: "Full Time",
  },
  {
    id: 3,
    employee: "David Miller",
    company: "Wipro",
    designation: "HR Executive",
    department: "HR",
    experience: "2 Years",
    type: "Contract",
  },
];

export default function Experience() {
  return (
    <div
      style={{
        marginLeft: "260px",
        padding: "35px",
        background: "#F4F7FC",
        minHeight: "100vh",
      }}
    >
      <h1>Employee Experience</h1>

      <p style={{ color: "#666", marginBottom: "20px" }}>
        Manage employee work experience details.
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
            placeholder="Search Experience..."
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
          Add Experience
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
            <th style={th}>Company</th>
            <th style={th}>Designation</th>
            <th style={th}>Department</th>
            <th style={th}>Experience</th>
            <th style={th}>Employment</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {experiences.map((exp) => (
            <tr key={exp.id}>
              <td style={td}>{exp.employee}</td>
              <td style={td}>{exp.company}</td>
              <td style={td}>{exp.designation}</td>
              <td style={td}>{exp.department}</td>
              <td style={td}>{exp.experience}</td>
              <td style={td}>{exp.type}</td>

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