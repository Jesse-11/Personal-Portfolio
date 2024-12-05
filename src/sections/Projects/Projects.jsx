import styles from './ProjectsStyles.module.css';
import Med from '../../assets/Med4You.webp';
import Darxi from '../../assets/Darxi.png';
import Amaf from '../../assets/AMAF.png';
import Stock from '../../assets/Stock.webp';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Amaf}
          link="https://github.com/UAdelaide/24S1_WDC_UG_Group_5"
          h3="AMAF"
          p="Marine Volunteer App"
        />
        <ProjectCard
          src={Darxi}
          link="https://github.com/Jesse-11/Darxi"
          h3="Darxi"
          p="GUI Newtorking Dashboard"
        />
        <ProjectCard
          src={Med}
          link="https://github.com/Jesse-11/Qt-Application-Startup"
          h3="Med4You"
          p="Medical GUI Dashboard"
        />
        <ProjectCard
          src={Stock}
          link="https://github.com/Jesse-11/OOP-InvestmentSimulator"
          h3="StockX"
          p="API Stock Market Portal"
        />
      </div>
    </section>
  );
}

export default Projects;