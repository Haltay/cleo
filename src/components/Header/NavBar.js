import { NavLink } from "react-router-dom";
import React, { useState } from "react";

import facebookLogo from "../../assets/header/facebookLogo.svg";
import "./NavBar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const NoScroll = () => {
    document.body.classList.toggle("no-scroll");
  };
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
    NoScroll();
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <nav className={`links ${showLinks ? "showNav" : "hideNav"} `}>
          <ul className="link">
            <NavLink
              activeClassName="active"
              to="/home"
              onClick={handleShowLinks}
            >
              HOME
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/info"
              onClick={handleShowLinks}
            >
              GENERAL INFORMATION
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/about"
              onClick={handleShowLinks}
            >
              ABOUT US
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/gallery"
              onClick={handleShowLinks}
            >
              GALLERY
            </NavLink>
            <NavLink
              activeClassName="active"
              to="/contact"
              onClick={handleShowLinks}
            >
              CONTACT US
            </NavLink>
          </ul>

          <button className="navbarBurger" onClick={handleShowLinks}>
            <span className="burgerBar"></span>
          </button>
        </nav>
      </div>
      <div className="rightSide">
        <a href="https://www.facebook.com/CleoChildminding" target="facebook">
          <img src={facebookLogo} alt="facebook-link" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
