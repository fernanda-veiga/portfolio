import React from "react";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import "../style/App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
