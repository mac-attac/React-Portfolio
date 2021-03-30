import React from "react";
import Projects from "../components/Projects";
import projects from "../projects.json";

function Portfolio() {
  return (
    <main className="container">
      <div className="row">
        <h1>Portfolio</h1>
        <hr />
      </div>
      <section>
        {projects.map((project) => {
          return (
            <Projects
              divClass={project.divClass}
              title={project.title}
              imgClass={project.imgClass}
              image={project.image}
              info={project.info}
              github={project.github}
              deployed={project.deployed}
              key={project.id}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Portfolio;
