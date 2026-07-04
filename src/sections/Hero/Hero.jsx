import styles from './HeroStyles.module.css';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Jesse Hoppo - Software Resume.pdf';
import {useTheme} from '../../common/ThemeContext';

function Hero() {
  const {theme} = useTheme();

  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.heroContent}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Software Engineer • Adelaide, Australia</p>

          <h1 className={styles.title}>
            Jesse Hoppo
          </h1>

          <p className={styles.description}>
            I&apos;m passionate about building systems & infrastructure that
            improve observability and BAU workflows.
          </p>

          <div className={styles.focusAreas} aria-label="Engineering focus areas">
            <span>Infrastructure</span>
            <span>Backend systems</span>
            <span>Product tooling</span>
          </div>

          <div className={styles.actions}>
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className={`button ${styles.resumeLink}`}
            >
              View Resume
            </a>

            <a
              href="https://github.com/Jesse-11"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <img src={githubIcon} alt="" aria-hidden="true" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/jesse11"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <img src={linkedinIcon} alt="" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
