import React from "react";
import Slide from "react-reveal";

const Resume = ({ data }) => {
  // const getRandomColor = () => {
  //   let letters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };

  function getRandomGradient() {
    // Helper function to generate a random color in HEX format
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // Generate two random colors
    const color1 = getRandomColor();
    const color2 = getRandomColor();
  
    // Generate a random angle for the gradient
    const angle = Math.floor(Math.random() * 360);
  
    // Return the gradient CSS string
    return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  }
  
  

  if (!data) return null;

  const skillmessage = data.skillmessage;
  const education = data.education.map((education) => (
    <div key={education.school}>
      <h3>{education.school}</h3>
      <p className="info">
        {education.degree} <span>&bull;</span>
        <em className="date">{education.graduated}</em>
      </p>
      <p>{education.description}</p>
    </div>
  ));

  const work = data.work.map((work) => (
    <div key={work.company}>
      <h3>{work.company}</h3>
      <p className="info">
        {work.title}
        <span>&bull;</span> <em className="date">{work.years}</em>
      </p>
      <p>{work.description}</p>
    </div>
  ));

  const skills = data.skills.map((skills) => {
    const backgroundColor = getRandomGradient();
    console.log("getRandomGradient", backgroundColor)
    const className = "bar-expand " + skills.name.toLowerCase();
    const width = skills.level;

    return (
      <li key={skills.name}>
        <span style={{ width, background: backgroundColor }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

  return (
    <section id="resume">
      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default Resume;
