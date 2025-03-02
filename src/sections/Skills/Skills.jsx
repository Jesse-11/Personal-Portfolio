import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  // First group of skills
  const coreSkills = [
    "C/C++", 
    "Python", 
    "HTML/CSS/JS", 
    "HDL/Assembly", 
    "mySQL"
  ];
  
  // Second group of skills
  const frameworkSkills = [
    "React", 
    "AJAX", 
    "Vue", 
    "QT", 
    "Rest API"
  ];
  
  // Third group of skills
  const toolsSkills = [
    "Git", 
    "Jira", 
    "Agile", 
    "Unix (Ubuntu/Kali)"
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>
      <div className={styles.skillsWrapper}>
        <div className={styles.skillList}>
          {coreSkills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <img src={checkMarkIcon} alt="Checkmark icon" />
              <p>{skill}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.skillList}>
          {frameworkSkills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <img src={checkMarkIcon} alt="Checkmark icon" />
              <p>{skill}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.skillList}>
          {toolsSkills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <img src={checkMarkIcon} alt="Checkmark icon" />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;