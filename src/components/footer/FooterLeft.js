import React from "react";

import imageLeft from "../../assets/footer/logoCleo.png";
import styles from "./FooterLeft.module.css";

const FooterLeft = () => {
  return (
    <div className={styles.footerLeft}>
      <img src={imageLeft} alt="cleochildminding-tree" />
    </div>
  );
};

export default FooterLeft;
