import React from "react";
import girlImg from "../assets/girl-illustration.svg";

function AboutMe() {
  return (
    <div>
      <h1>Hi, I'm Fernanda Veiga</h1>
      <p>Front-End Developer</p>
      <a>View my projects</a>
      <img src={girlImg} alt="" />
    </div>
  );
}

export default AboutMe;
