import React from "react";

import HeaderTop from "../header/HeaderTop"
import NavBar from "../header/NavBar";
import HeaderBottom from "../header/HeaderBottom";

const Header = () => {
  return (
    <div>
      <HeaderTop />
      <NavBar />
      <HeaderBottom />
    </div>
  );
};

export default Header;
