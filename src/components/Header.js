import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="primary-header" id="home">
      <div className="left">
        <div>
          <h1>Rajan Himang</h1>
        </div>
        <div className="line"></div>
        <div>
          <h1>Front End developer</h1>
        </div>
      </div>
      <div className="right">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="menu-icon">
          <i className="fa-solid fa-bars"></i>
        </label>

        <ul className="navigation">
          <li>
            <Link to={"/skills"}>Skills</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"/aboutme"}>About me</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contacts</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
