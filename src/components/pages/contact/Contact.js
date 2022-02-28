import React from "react";
import ContactForm from "../../contactForm/ContactForm";

import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <div className={styles.contactAddress}>
        <p> Cleo Childminding,</p>
        <p>Dawson Place, BO’NESS, EH51 0NP</p>
      </div>
      <div className={styles.contactContent}>
        <p className={styles.contactContentIntro}>If you have any queries please contact us using the information below.</p>
        <ContactForm />
        <p className={styles.contactContentBottom}>
          or on <br /> <br /></p>
          <a href="https://www.facebook.com/CleoChildminding" target="facebook">
            <h3>My Facebook</h3>
          </a>
        
      </div>
    </div>
  );
};

export default Contact;
