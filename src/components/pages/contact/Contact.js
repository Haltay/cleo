import React from "react";
import ContactForm from "../../contactForm/ContactForm";

import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.content}>
        If you have any queries please contact us using the information below.
      </div>
      <div className={styles.content}>
        <ContactForm />
      </div>
      <div className={styles.content}>
        <p>
          or on <br /> <br />
          <a href="https://www.facebook.com/CleoChildminding" target="facebook">
            My Facebook
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
