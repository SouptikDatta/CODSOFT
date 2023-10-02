import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (

    <div className="n-wrapper" id="Navbar">
      
      {/* left */}
      <div className="n-left">
        <div className="n-name">Souptik</div>
        <Toggle />
      </div>

      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="home" smooth={true} spy={true}>
              <button className="button n-button">Home</button>
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} spy={true}>
              <button className="button n-button">Skills</button>
              </Link>
            </li>
            <li>
              <Link to="works" smooth={true} spy={true}>
              <button className="button n-button">Education</button>
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} spy={true}>
                <button className="button n-button">Projects</button>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" smooth={true} spy={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>


    </div>
  );
};

export default navbar;