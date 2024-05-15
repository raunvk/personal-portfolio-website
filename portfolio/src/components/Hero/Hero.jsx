import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Raunak</h1>
        <p className={styles.description}>
        I'm a results-oriented Full-Stack Developer experienced in frontend and backend technologies. I excel at driving software projects forward and enhancing team capabilities. Let's innovate together!
        </p>
        <div className={styles.links}>
          <div className={styles.linkImageContainer}>
            <a href="https://www.linkedin.com/in/raunvk/" target="_blank">
              <img src={getImageUrl("hero/linkedin.png")} alt="LinkedIn" />
            </a>
          </div>
          <div className={styles.linkImageContainer}>
            <a href="https://github.com/raunvk" target="_blank">
              <img src={getImageUrl("hero/github.png")} alt="Github" />
            </a>
          </div>
          <div className={styles.linkImageContainer}>
            <a href="https://leetcode.com/u/raunvk/" target="_blank">
              <img src={getImageUrl("hero/leetcode.png")} alt="Leetcode" />
            </a>
          </div>
          <div className={styles.linkImageContainer}>
            <a href="https://www.hackerrank.com/profile/raunakd137" target="_blank">
              <img src={getImageUrl("hero/hackerrank.png")} alt="Hackerrank" />
            </a>
          </div>
        </div>
        <a href="mailto:raunakdas.contact@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <a href="/" className={styles.heroImg}>
        <img src={getImageUrl("hero/heroImage.png")} alt="Avatar" />
      </a>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
