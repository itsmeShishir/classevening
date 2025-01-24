import React from "react";
import { useNavigate } from "react-router-dom";

function UserMain() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to User Dashboard</h1>
      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>Username:</strong> {username || "Not Available"}
        </p>
        <p>
          <strong>Email:</strong> {email || "Not Available"}
        </p>
      </div>
      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default UserMain;
