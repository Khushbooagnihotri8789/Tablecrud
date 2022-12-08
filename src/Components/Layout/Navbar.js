import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container">
        <NavLink className="navbar-brand" href="/">
          Crud
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to={"/about"}>
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to={"/contact"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/users/add"} className="btn btn-outline-primary">
          Add user
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;