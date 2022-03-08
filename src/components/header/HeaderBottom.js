import React from "react";

import imageBottom from "../../assets/header/header-Cleo.jpg";

import styles from "./HeaderBottom.module.css";

const HeaderBottom = () => {
  return (
    <div className={styles.imageBottom}>
      <img src={imageBottom} alt="cleochildminding" />
    </div>
  );
};

export default HeaderBottom;
