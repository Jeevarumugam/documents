import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/Login");
  };
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Document Management System</h1>
        <button onClick={handleLogout}>Logout🚪</button>
      </header>
      <main className="dashboard-content">
        <h2>Welcome to Dashboard👋 </h2>
        <p>Manage your documents easily from here.</p>

        <div className="dashboard-cards">
          <div className="card">
            <h3>My documents 📝</h3>
            <p>View and manage your documents.</p>
            <Link to="/Documents">
              <button>View documents</button>
            </Link>
          </div>
          <div className="card">
            <h3>Add documents➕</h3>
            <p>Add a new document to your account.</p>
            <Link to="/Documents">
              <button>View documents</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Dashboard;
