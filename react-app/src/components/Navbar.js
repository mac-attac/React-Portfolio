import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            Steve McNamara
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="navBarLink" to="/about" target="_blank">
                About
              </NavLink>

              <NavLink className="navBarLink" to="/contact">
                Contact
              </NavLink>

              <NavLink className="navBarLink" to="/portfolio">
                Portfolio
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />
    </>
  );
}

export default Navbar;
