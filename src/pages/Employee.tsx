import { useEffect, useState } from "react";
import api from "../api/axios";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Search, Refresh } from "@mui/icons-material";

interface Employee {
  id: number;
  employeeCode: string;
  firstName: string;
  lastName: string;
  department: string;
  designation: string;
  email: string;
  employeeStatus: string;
}

export default function Employee() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const response = await api.get("/employees");
      console.log(response.data);
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEmployees = employees.filter((emp) =>
    (
      emp.firstName +
      " " +
      emp.lastName +
      emp.employeeCode +
      emp.department +
      emp.designation
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "#F4F7FC",
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <Navbar />

      <div
        style={{
          marginLeft: "260px",
          padding: "30px",
          paddingTop: "100px",
        }}
      >
        <h1>Employee Management</h1>

        <p
          style={{
            color: "#666",
            marginBottom: "25px",
          }}
        >
          Manage all employees in your organization.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              padding: "10px 15px",
              borderRadius: "10px",
              width: "350px",
              boxShadow: "0 4px 10px rgba(0,0,0,.08)",
            }}
          >
            <Search />

            <input
              type="text"
              placeholder="Search Employee..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                marginLeft: "10px",
                width: "100%",
              }}
            />
          </div>

          <button
            onClick={loadEmployees}
            style={{
              background: "#2563EB",
              color: "#fff",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Refresh />
            Refresh
          </button>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 5px 15px rgba(0,0,0,.08)",
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
                <th style={th}>ID</th>
                <th style={th}>Code</th>
                <th style={th}>First Name</th>
                <th style={th}>Last Name</th>
                <th style={th}>Department</th>
                <th style={th}>Designation</th>
                <th style={th}>Email</th>
                <th style={th}>Status</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} style={td}>
                    Loading Employees...
                  </td>
                </tr>
              ) : filteredEmployees.length === 0 ? (
                <tr>
                  <td colSpan={8} style={td}>
                    No Employees Found
                  </td>
                </tr>
              ) : (
                filteredEmployees.map((emp) => (
                  <tr key={emp.id}>
                    <td style={td}>{emp.id}</td>
                    <td style={td}>{emp.employeeCode}</td>
                    <td style={td}>{emp.firstName}</td>
                    <td style={td}>{emp.lastName}</td>
                    <td style={td}>{emp.department}</td>
                    <td style={td}>{emp.designation}</td>
                    <td style={td}>{emp.email}</td>
                    <td style={td}>
                      <span
                        style={{
                          background:
                            emp.employeeStatus === "ACTIVE"
                              ? "#DCFCE7"
                              : "#FEE2E2",
                          color:
                            emp.employeeStatus === "ACTIVE"
                              ? "#15803D"
                              : "#DC2626",
                          padding: "5px 12px",
                          borderRadius: "20px",
                          fontSize: "13px",
                        }}
                      >
                        {emp.employeeStatus}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
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