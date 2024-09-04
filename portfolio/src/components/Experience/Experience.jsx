import React from "react";
import styles from "./Experience.module.css";
import experience from "../../data/experience.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">  
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.experience}>
          {experience.map((experienceItem, id) => {
            return (
              <li key={id} className={styles.experienceItem}>
                <a href="https://www.linkedin.com/in/raunvk/" target="_blank" rel="noopener noreferrer" >
                  <img
                    src={getImageUrl(experienceItem.imageSrc)}
                    alt={`${experienceItem.organisation} Logo`}
                  />
                </a>
                <div className={styles.experienceItemDetails}>
                  <h3>{`${experienceItem.role}`}</h3>
                  <p>{`${experienceItem.organisation}, ${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                  <p>{`Technologies : ${experienceItem.technologies}`}</p>
                  
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
