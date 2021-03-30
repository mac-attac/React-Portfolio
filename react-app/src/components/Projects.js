import React from "react";

function Projects(props) {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className={props.divClass}>
            <h2>{props.title}</h2>
            <img
              className={props.imgClass}
              src={require(`../assets/${props.image}.png`).default}
              alt="screenshot of deployed site"
            />
            <p className="info">{props.info}</p>
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              GitHub Documentation
            </a>
            <br />
            <a href={props.deployed} target="_blank" rel="noopener noreferrer">
              Live Deployed
            </a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Projects;
