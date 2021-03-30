import React from "react";
// import { NavLink } from "react-router-dom";
import resume from "../assets/resume.docx";

function About() {
  return (
    <>
      <main className="container">
        <div className="row">
          <h1>Check Me Out</h1>
          <hr />
          <div className="col-sm-4" style={{ padding: 30 }}>
            <img
              src={require("../assets/sm.jpg").default}
              className=" mac rounded float-left"
              alt="Steve McNamara"
            />
          </div>
          <div
            className="col-sm-8"
            style={{ textAlign: "center", paddingTop: 30, paddingLeft: 30 }}
          >
            <br />
            <br />
            <h1>
              <a
                href="https://github.com/mac-attac"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </h1>
            <br />
            <h1>
              <a
                href="https://www.NavLinkedin.com/in/stephenmcnamara36/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </h1>
            <br />
            <h1>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              {/* <NavLink to={resume}>Resume</NavLink> */}
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
