import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="flex justify-between container mx-auto mt-20 uppercase text-3xl">
      <div className="logo ">
        <HashLink smooth to="#home"  className="link-item">
          Md Rafiul Islam
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li>
          <HashLink smooth to="#home" className="link-item">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects" className="link-item">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills" className="link-item">
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className="link-item">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact" className="link-item">
            Contact
          </HashLink>
        </li>
        <li>
          <a
            className="link-item"
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
