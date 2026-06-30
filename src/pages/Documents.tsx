import React from "react";
import { Add, Search, Edit, Delete, Visibility } from "@mui/icons-material";

const documents = [
  {
    id: 1,
    employee: "John Smith",
    document: "Aadhar Card",
    uploadDate: "2026-06-01",
    status: "Verified",
  },
  {
    id: 2,
    employee: "Emma Watson",
    document: "PAN Card",
    uploadDate: "2026-06-03",
    status: "Pending",
  },
  {
    id: 3,
    employee: "David Miller",
    document: "Degree Certificate",
    uploadDate: "2026-06-05",
    status: "Verified",
  },
];

export default function Documents() {
  return (
    <div
      style={{
        marginLeft: "260px",
        padding: "35px",
        background: "#F4F7FC",
        minHeight: "100vh",
      }}
    >
      <h1>Employee Documents</h1>

      <p style={{ color: "#666" }}>
        Manage employee documents and verification.
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
            boxShadow: "0 4px 12px rgba(0,0,0,.08)",
          }}
        >
          <Search />

          <input
            placeholder="Search Documents..."
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
            gap: "8px",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Add />
          Upload Document
        </button>
      </div>

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
              <th style={th}>Document</th>
              <th style={th}>Upload Date</th>
              <th style={th}>Status</th>
              <th style={th}>Action</th>
            </tr>
          </thead>

          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td style={td}>{doc.employee}</td>
                <td style={td}>{doc.document}</td>
                <td style={td}>{doc.uploadDate}</td>

                <td style={td}>
                  <span
                    style={{
                      background:
                        doc.status === "Verified"
                          ? "#DCFCE7"
                          : "#FEF3C7",
                      color:
                        doc.status === "Verified"
                          ? "#16A34A"
                          : "#D97706",
                      padding: "6px 14px",
                      borderRadius: "20px",
                    }}
                  >
                    {doc.status}
                  </span>
                </td>

                <td style={td}>
                  <button style={viewBtn}>
                    <Visibility />
                  </button>

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

const viewBtn: React.CSSProperties = {
  background: "#2563EB",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "8px",
  marginRight: "8px",
  cursor: "pointer",
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