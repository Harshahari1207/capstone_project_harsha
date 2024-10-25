import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo-transparent.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const history = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault(); // Prevents the default anchor behavior
    localStorage.clear();
    history("/"); // Navigate to home page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 d-flex justify-content-between align-items-center p-3">
      <Link className="navbar-brand" to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {localStorage.getItem("username") ? (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                <FontAwesomeIcon icon={faUser} />{"  "}
                 Welcome {localStorage.getItem("username")}
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={handleLogout}>
                Logout
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
