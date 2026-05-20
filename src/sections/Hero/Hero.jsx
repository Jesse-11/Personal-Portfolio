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
        <p className={styles.eyebrow}>Software Engineer • Adelaide, Australia</p>

        <h1 className={styles.title}>
          Hello, I&apos;m <span>Jesse</span>.
        </h1>

        <p className={styles.description}>
          I am a Software Engineering Honours student and SWE Intern at AEMO,
          with a strong interest in infrastructure automation, observability,
          reliable delivery, and software that solves real workflow problems.
        </p>

        <div className={styles.actions}>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className={`button ${styles.resumeLink}`}
          >
            View Resume
          </a>

          <div className={styles.socialLinks}>
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
