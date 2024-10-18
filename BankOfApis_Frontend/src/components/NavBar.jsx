import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 d-flex justify-content-between align-items-center p-3">
        <a className="navbar-brand" href="/"> BankAPI's</a>
        <div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">Register</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
  );
};

export default NavBar;
