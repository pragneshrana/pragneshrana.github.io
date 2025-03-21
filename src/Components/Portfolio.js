import React from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

const Portfolio = ({ data }) => {
  if (!data) return null;

  let id = 0;
  const projects = data.projects.map((project) => {
    const projectImage = "images/portfolio/" + project.image;

    return (
      <div key={id++} className="columns portfolio-item">
        <div className="item-wrap">
          <Zmage alt={project.title} src={projectImage} />
          <div style={{ textAlign: "center" }}><a href={project.url} target="_blank" style={{
            color: '#043b70'
          }}><u>{project.title}</u></a></div>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="10px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
