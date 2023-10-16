import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer__content">
        <a href="https://github.com/a-norchh" rel="noreferrer" target="_blank">
          <AiFillGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/norawich-dechsiri/"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillLinkedin className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
