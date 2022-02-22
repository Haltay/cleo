import React from "react";

import styles from "./FooterContent.module.css";

const FooterContent = () => {
  return (
    <div className={styles.footerContent}>
      <li>
        <span className={styles.footerContentTitle}>Cleo Childminding </span>
        <div className={styles.footerContentList}>
          <ul className={styles.content}>
            <a href="/about">About</a>
          </ul>
          <ul className={styles.content}>
            <a href="/contact">Contact</a>
          </ul>
        </div>
      </li>
    </div>
  );
};

export default FooterContent;
