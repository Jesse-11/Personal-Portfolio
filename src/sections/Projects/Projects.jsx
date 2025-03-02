import styles from './ProjectsStyles.module.css';
import Med from '../../assets/Med4You.webp';
import Discord from '../../assets/Discord-bot.png';
import Amaf from '../../assets/AMAF.png';
import Stock from '../../assets/Stock.webp';
import Website from '../../assets/hero-img.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {

  const projectsData = [
    {
      src: Amaf,
      link: "https://github.com/Jesse-11/Volunteer-Event-Webpage",
      h3: "AMAF",
      p: "Marine Volunteer App",
      technologies: ["Vue", "AJAX", "Express", "MySQL"]
    },
    {
      src: Discord,
      link: "https://github.com/Jesse-11/DracoX",
      h3: "DracoX",
      p: "Python Discord Bot",
      technologies: ["Python", "Discord API"]
    },
    {
      src: Med,
      link: "https://github.com/Jesse-11/Qt-Application-Startup",
      h3: "Medi",
      p: "Medical GUI Dashboard",
      technologies: ["C++", "Qt", "Figma"]
    },
    {
      src: Stock,
      link: "https://github.com/Jesse-11/OOP-InvestmentSimulator",
      h3: "StockX",
      p: "API Stock Market Portal",
      technologies: ["C++", "API"]
    }, 
    {
      src: Website,
      link: "https://github.com/Jesse-11/Personal-Portfolio",
      h3: "Portfolio",
      p: "Personal Website",
      technologies: ["React", "Figma", "CSS"]	
    }
  ]



  return (
    <section id="projects" className={styles.projects}>
    <h1 className={styles.sectionTitle}>Projects</h1>
    <div className={styles.projectsContainer}>
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          src={project.src}
          link={project.link}
          h3={project.h3}
          p={project.p}
          technologies={project.technologies}
        />
      ))}
    </div>
  </section>
  )

}

export default Projects;