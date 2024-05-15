import React from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";

export const Skills = () => {
  const skillsPerRow = 6;

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skillsItems}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skillsItem}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} onClick={() => window.open(skill.url, '_blank')}/>
              </div>
              <div>
                <h3>{skill.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
