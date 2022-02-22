import React from "react";

import styles from "./FooterBottom.module.css";

const currentYear = () => {
  return new Date().getFullYear();
};

const FooterBottom = () => {
  return (
    <div className={styles.footerBottom} >
      <div>Cleo Childminding 2019 - {currentYear()}</div>
      <div>Created by J.R.</div>
    </div>
  );
};

export default FooterBottom;
