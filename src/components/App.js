import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import "../style/App.css";

function App() {
  let listener;
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    listener = document.addEventListener("scroll", () => {
      const pixelsScrolled = document.scrollingElement.scrollTop;

      if (pixelsScrolled >= 50) {
        setIsTopOfPage(false);
      } else {
        setIsTopOfPage(true);
      }
    });

    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [isTopOfPage]);

  return (
    <div className="App">
      <NavBar isTopOfPage={isTopOfPage} />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
