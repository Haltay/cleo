import React from "react";

import FooterLeft from "../footer/FooterLeft";
import FooterContent from "../footer/FooterContent";
import FooterBottom from "../footer/FooterBottom";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <FooterLeft />
      <FooterContent />
      <FooterBottom />
    </div>
  );
};

export default Footer;
