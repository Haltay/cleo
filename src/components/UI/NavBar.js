import React, { useState } from "react";

import styles from "./NavBar.module.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav>
      {toggleMenu && (
        <ul className={styles.list}>
          <li className={styles.items}>Home</li>
          <li className={styles.items}>Services</li>
          <li className={styles.items}>Contact</li>
        </ul>
      )}

      <button className={styles.btn} onClick={toggleNavSmallScreen}>
        BTN
      </button>
    </nav>
  );
};

export default Navbar;
