import React from "react";
import { Add, Search, Edit, Delete, Phone } from "@mui/icons-material";

const contacts = [
  {
    id: 1,
    employee: "John Smith",
    contactName: "Robert Smith",
    relationship: "Father",
    phone: "9876543210",
    alternate: "9123456780",
  },
  {
    id: 2,
    employee: "Emma Watson",
    contactName: "Sophia Watson",
    relationship: "Mother",
    phone: "9988776655",
    alternate: "9876501234",
  },
  {
    id: 3,
    employee: "David Miller",
    contactName: "James Miller",
    relationship: "Brother",
    phone: "9012345678",
    alternate: "9876541111",
  },
];

export default function EmergencyContact() {
  return (
    <div
      style={{
        marginLeft: "260px",
        padding: "35px",
        background: "#F4F7FC",
        minHeight: "100vh",
      }}
    >
      <h1>Emergency Contacts</h1>

      <p style={{ color: "#666", marginBottom: "20px" }}>
        Manage employee emergency contact information.
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
            placeholder="Search Contact..."
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
          Add Contact
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
            <th style={th}>Contact Name</th>
            <th style={th}>Relationship</th>
            <th style={th}>Phone</th>
            <th style={th}>Alternate</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td style={td}>{contact.employee}</td>
              <td style={td}>{contact.contactName}</td>
              <td style={td}>{contact.relationship}</td>
              <td style={td}>
                <Phone
                  style={{
                    color: "#16A34A",
                    fontSize: "18px",
                    verticalAlign: "middle",
                    marginRight: "6px",
                  }}
                />
                {contact.phone}
              </td>
              <td style={td}>{contact.alternate}</td>

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