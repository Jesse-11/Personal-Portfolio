import styles from './ProjectCard.module.css';

function ProjectCard({ src, codeUrl, demoUrl, title, description, technologies }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImage}>
        <img src={src} alt={`${title} preview`} />
      </div>
      <div className={styles.projectInfo}>
        <div>
          <p className={styles.projectEyebrow}>Featured project</p>
          <h3>{title}</h3>
          <p className={styles.projectDescription}>{description}</p>
        </div>

        {technologies && technologies.length > 0 && (
          <div className={styles.projectTechnologies}>
            {technologies.map((tech) => (
              <span key={tech} className={styles.technologyTag}>{tech}</span>
            ))}
          </div>
        )}

        <div className={styles.projectActions}>
          <a className={styles.projectActionPrimary} href={codeUrl} target="_blank" rel="noopener noreferrer">
            Code
          </a>
          {demoUrl ? (
            <a className={styles.projectActionSecondary} href={demoUrl} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          ) : (
            <span className={styles.projectActionDisabled} aria-disabled="true">
              Demo soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
