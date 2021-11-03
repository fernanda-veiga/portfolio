import React from "react";
import girlImg from "../assets/girl-illustration.svg";

function AboutMe() {
  return (
    <div className="AboutMe" id="home">
      <div className="AboutMe-left">
        <h1>Hi, I'm Fernanda Veiga</h1>
        <p>Front-End Developer</p>
        <span className="AboutMe-personal-links">
          <a
            className="linkedin-link"
            aria-label="Link to linkedin"
            href="https://www.linkedin.com/in/fernandarochaveiga/"
            target="_blank"
          ></a>
          <a
            className="github-link"
            aria-label="Link to Github"
            href="https://github.com/fernanda-veiga"
            target="_blank"
          ></a>
        </span>
        <a className="AboutMe-projects-link" href="#projects">
          View my projects
        </a>
      </div>
      <div className="AboutMe-right">
        <img src={girlImg} alt="" />
      </div>
    </div>
  );
}

export default AboutMe;
