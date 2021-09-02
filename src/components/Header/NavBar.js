import React, { useState } from "react";

import facebookLogo from "../../assets/facebookLogo.svg";
import "./NavBar.css";
import ReorderIcon from '@material-ui/icons/Reorder';

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="navbar">
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/home">Home</a>
          <a href="/info">Info</a>
          <a href="/about">About</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks) }> 
          <ReorderIcon />  
        </button>
      </div>
      <div className="rightSide">
        <img src={facebookLogo} alt="facebook-link" />
      </div>
    </div>
  );
};

export default Navbar;
