import React from "react";
import placeholderWebsiteImg from "../assets/projects/placeholder-website.png";
import wheresWaldoImg from "../assets/projects/wheres-waldo.png";
import battleshipImg from "../assets/projects/battleship.png";
import memoryGameImg from "../assets/projects/memory-game.png";
import weatherAppImg from "../assets/projects/weather-app.png";
import toDoListAppImg from "../assets/projects/to-do-list-app.png";
import ticTacToeImg from "../assets/projects/tic-tac-toe.png";
import libraryAppImg from "../assets/projects/library-app.png";
import calculatorImg from "../assets/projects/calculator.png";

function Project(props) {
  return (
    <div className="Project">
      <img className="Project-image" src={props.img} alt="" />
      <div className="Project-description">
        <h2 className="Project-title">{props.title}</h2>
        <p className="Project-skills">{props.skills}</p>
        <span className="Project-links">
          {props.finished ? (
            <a href={props.website} target="_blank">
              Website
            </a>
          ) : null}
          <a href={props.github} target="_blank">
            Github
          </a>
        </span>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="Projects" id="projects">
      <h1>PROJECTS</h1>
      <p className="Projects-github-link">
        More projects available at my{" "}
        <a href="https://github.com/fernanda-veiga" target="_blank">
          Github
        </a>
      </p>
      <div className="Projects-container">
        <Project
          finished={false}
          img={placeholderWebsiteImg}
          title="Pinterest Clone (Ongoing)"
          skills="React / JavaScript / HTML / SASS / API Usage / Firebase"
          github="https://github.com/fernanda-veiga/pinterest-clone"
        />
        <Project
          finished={true}
          img={wheresWaldoImg}
          title="Where's Waldo"
          skills="React / JavaScript / HTML / CSS / Firebase"
          website="https://fernanda-veiga.github.io/wheres-waldo/"
          github="https://github.com/fernanda-veiga/wheres-waldo"
        />
        <Project
          finished={true}
          img={battleshipImg}
          title="Battleship"
          skills="React / JavaScript / HTML / CSS / Jest"
          website="https://fernanda-veiga.github.io/battleship/"
          github="https://github.com/fernanda-veiga/battleship"
        />
        <Project
          finished={true}
          img={weatherAppImg}
          title="Weather App"
          skills="JavaScript / HTML / CSS / API Usage / Webpack"
          website="https://fernanda-veiga.github.io/weather/"
          github="https://github.com/fernanda-veiga/weather"
        />
        <Project
          finished={true}
          img={toDoListAppImg}
          title="To Do List App"
          skills="JavaScript / HTML / CSS / Webpack / OOP"
          website="https://fernanda-veiga.github.io/to-do-list-app/"
          github="https://github.com/fernanda-veiga/to-do-list-app"
        />
        <Project
          finished={true}
          img={memoryGameImg}
          title="Memory Game"
          skills="React / JavaScript / HTML / CSS"
          website="https://fernanda-veiga.github.io/memory-game/"
          github="https://github.com/fernanda-veiga/memory-game"
        />
        <Project
          finished={true}
          img={ticTacToeImg}
          title="Tic Tac Toe"
          skills="JavaScript / HTML / CSS / OOP"
          website="https://fernanda-veiga.github.io/tic-tac-toe/"
          github="https://github.com/fernanda-veiga/tic-tac-toe"
        />
        <Project
          finished={true}
          img={libraryAppImg}
          title="Library App"
          skills="JavaScript / HTML / CSS / OOP"
          website="https://fernanda-veiga.github.io/library-app/"
          github="https://github.com/fernanda-veiga/library-app"
        />
        <Project
          finished={true}
          img={calculatorImg}
          title="Calculator"
          skills="JavaScript / HTML / CSS"
          website="https://fernanda-veiga.github.io/calculator/"
          github="https://github.com/fernanda-veiga/calculator"
        />
      </div>
    </div>
  );
}

export default Projects;
