import React from "react";

function NavBar() {
  return (
    <header className="NavBar">
      <div className="NavBar-left">
        <p>Fernanda Veiga</p>
      </div>
      <div className="NavBar-right">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
