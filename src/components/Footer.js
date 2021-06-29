import React from "react";

function Footer() {
  return (
    <footer className="Footer" id="contact">
      <h1>CONTACT</h1>
      <span className="Footer-personal-links">
        <a
          className="Footer-linkedin-link"
          aria-label="Link to linkedin"
          href="https://www.linkedin.com/in/fernandarochaveiga/"
          target="_blank"
        ></a>
        <a
          className="Footer-github-link"
          aria-label="Link to Github"
          href="https://github.com/fernanda-veiga"
          target="_blank"
        ></a>
      </span>
      <p>FERNANDA VEIGA ©2021</p>
    </footer>
  );
}

export default Footer;
