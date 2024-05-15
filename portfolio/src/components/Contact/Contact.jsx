import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="https://web.whatsapp.com/" target="_blank">
            <img src={getImageUrl("contact/whatsapp.png")} alt="Whatsapp" />
          </a>
          <a href="https://web.whatsapp.com/" target="_blank">(+91) 9831602488</a>
        </li>
        <li className={styles.link}>
          <a href="mailto:raunakdas.contact@gmail.com" target="_blank">
            <img src={getImageUrl("contact/email.png")} alt="Email" />
          </a>
          <a href="mailto:raunakdas.contact@gmail.com" target="_blank">raunakdas.contact@email.com</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/raunvk/" target="_blank">
            <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn" />
          </a>
          <a href="https://www.linkedin.com/in/raunvk/" target="_blank">linkedin.com/in/raunvk/</a>
        </li>
      </ul>
    </footer>
  );
};
