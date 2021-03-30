import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <Link className="navBarLinkName" to="/about">
            Steve McNamara
          </Link>
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
              <Link className="navBarLink" to="/about">
                About
              </Link>

              <Link className="navBarLink" to="/contact">
                Contact
              </Link>

              <Link className="navBarLink" to="/portfolio">
                Portfolio
              </Link>
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
