import React, { useState } from "react";

import facebookLogo from "../../assets/facebookLogo.svg";
import styles from "./NavBar.module.css";

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.leftSide}>
        <div className={styles.links}>
          <a href="/home">Home</a>
          <a href="/info">Info</a>
          <a href="/about">About</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
        <button>Open</button>
      </div>
      <div className={styles.rightSide}>
        <img src={facebookLogo} alt="facebook-link" />
      </div>
    </div>
  );
};

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   const toggleNavSmallScreen = () => {
//     setToggleMenu(!toggleMenu);
//   };

//   return (
//     <nav>
//       {toggleMenu && (
//         <ul className={styles.list}>
//           <li className={styles.items}>Home</li>
//           <li className={styles.items}>Services</li>
//           <li className={styles.items}>Contact</li>
//         </ul>
//       )}

//       <button className={styles.btn} onClick={toggleNavSmallScreen}>
//         BTN
//       </button>
//     </nav>
//   );
// };

export default Navbar;
