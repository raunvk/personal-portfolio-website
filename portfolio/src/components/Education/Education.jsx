import React from "react";
import styles from "./Education.module.css";
import education from "../../data/education.json";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">  
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.education}>
          {education.map((educationItem, id) => {
            return (
              <li key={id} className={styles.educationItem}>
                <a href="https://www.linkedin.com/in/raunvk/" target="_blank" rel="noopener noreferrer" >
                  <img
                    src={getImageUrl(educationItem.imageSrc)}
                    alt={`${educationItem.university} Logo`}
                  />
                </a>
                <div className={styles.educationItemDetails}>
                  <h3>{`${educationItem.degree}, ${educationItem.major}`}</h3>
                  <p>{`${educationItem.university}, ${educationItem.startDate} - ${educationItem.endDate}`}</p>
                  <p>{`Cumulative GPA : ${educationItem.cgpa}`}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
