import React from "react";
import styles from "./Certificates.module.css";
import { getImageUrl } from "../../utils";
import certificatesData from "../../data/certificates.json"; // Importing certificate data

export const Certificates = () => {
  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.content}>
        <ul className={styles.certificatesItems}>
          {certificatesData.map((certificate, index) => (
            <li key={index} className={styles.certificatesItem}>
              <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                <img src={getImageUrl(certificate.imageSrc)} alt={`${certificate.title} Icon`} />
              </a>
              <div className={styles.certificatesItemText}>
                <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                  <h3>{certificate.title}</h3>
                </a>
                <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                  <p>{certificate.organisation}, {certificate.date}</p>
                  <p>Skills: {certificate.skills}</p>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};