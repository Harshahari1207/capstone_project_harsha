import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 d-flex justify-content-between align-items-center p-3">
      <a className="navbar-brand" href="/">
        {" "}
        BankAPI's
      </a>
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
        {localStorage.getItem("token") ? (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Welcome {localStorage.getItem("username")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Logout
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">
                Dashboard
              </a>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">
                Register
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
