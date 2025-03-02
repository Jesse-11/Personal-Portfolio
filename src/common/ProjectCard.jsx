import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, link, h3, p, technologies }) {
  return (
    <div className={styles.projectCard}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={styles.projectImage}>
          <img src={src} alt={`${h3} logo`} />
        </div>
        <div className={styles.projectInfo}>
          <h3>{h3}</h3>
          <p className={styles.projectDescription}>{p}</p>
          {technologies && technologies.length > 0 && (
            <div className={styles.projectTechnologies}>
              {technologies.map((tech, index) => (
                <span key={index} className={styles.technologyTag}>{tech}</span>
              ))}
            </div>
          )}
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;