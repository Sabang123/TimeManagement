import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault(); // Prevent Link default behavior
    localStorage.removeItem("user"); // Clear session
    navigate("/"); // ✅ Redirect to Login (landing page)
  };

  // Hide Navbar on Login & Register pages
  const hideNavbar =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <nav className="navbar">
      <div className="navbar-title">Time Management</div>

      {!hideNavbar && (
        <div className="navbar-links">
          <Link to="/home">Home</Link>
          <Link to="/dashboard">Dashboard</Link>

          {/* ✅ Use button for logout */}
          <button
            onClick={handleLogout}
            style={{
              background: "none",
              border: "none",
              color: "inherit",
              textDecoration: "underline",
              cursor: "pointer",
              font: "inherit",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
