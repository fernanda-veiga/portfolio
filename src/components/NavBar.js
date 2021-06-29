import React from "react";

function NavBar(props) {
  return (
    <header
      className="NavBar"
      style={
        props.isTopOfPage
          ? { color: "#0d1117", backgroundColor: "#ffffff" }
          : {
              color: "#ffffff",
              backgroundColor: "#4e53ba",
            }
      }
    >
      <div className="NavBar-left">
        <p>Fernanda Veiga</p>
      </div>
      <div className="NavBar-right">
        <ul>
          <li>
            <a
              href="#home"
              style={
                props.isTopOfPage ? { color: "#0d1117" } : { color: "#ffffff" }
              }
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              style={
                props.isTopOfPage ? { color: "#0d1117" } : { color: "#ffffff" }
              }
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              style={
                props.isTopOfPage ? { color: "#0d1117" } : { color: "#ffffff" }
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
