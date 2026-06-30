import React from "react";
import { Add, Search, Edit, Delete } from "@mui/icons-material";

const bankDetails = [
  {
    id: 1,
    employee: "John Smith",
    bank: "State Bank of India",
    account: "XXXX1234",
    ifsc: "SBIN0001234",
    branch: "Mysore",
    upi: "john@sbi",
  },
  {
    id: 2,
    employee: "Emma Watson",
    bank: "HDFC Bank",
    account: "XXXX5678",
    ifsc: "HDFC0004567",
    branch: "Bangalore",
    upi: "emma@hdfc",
  },
  {
    id: 3,
    employee: "David Miller",
    bank: "ICICI Bank",
    account: "XXXX9876",
    ifsc: "ICIC0009876",
    branch: "Chennai",
    upi: "david@icici",
  },
];

export default function BankDetails() {
  return (
    <div
      style={{
        marginLeft: "260px",
        padding: "35px",
        background: "#F4F7FC",
        minHeight: "100vh",
      }}
    >
      <h1>Bank Details</h1>

      <p style={{ color: "#666", marginBottom: "20px" }}>
        Manage employee bank information.
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
            placeholder="Search Bank Details..."
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
          Add Bank Details
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
            <th style={th}>Bank</th>
            <th style={th}>Account No.</th>
            <th style={th}>IFSC</th>
            <th style={th}>Branch</th>
            <th style={th}>UPI</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {bankDetails.map((bank) => (
            <tr key={bank.id}>
              <td style={td}>{bank.employee}</td>
              <td style={td}>{bank.bank}</td>
              <td style={td}>{bank.account}</td>
              <td style={td}>{bank.ifsc}</td>
              <td style={td}>{bank.branch}</td>
              <td style={td}>{bank.upi}</td>

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