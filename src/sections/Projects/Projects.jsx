import styles from './ProjectsStyles.module.css';
import Med from '../../assets/Med4You.webp';
import Discord from '../../assets/Discord-bot.png';
import Amaf from '../../assets/AMAF.png';
import Website from '../../assets/Website.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  const projectsData = [
    {
      src: Amaf,
      codeUrl: "https://github.com/Jesse-11/Volunteer-Event-Webpage",
      demoUrl: "",
      title: "Marine Volunteering",
      description: "Volunteer event platform for coordinating marine conservation activity and community participation.",
      technologies: ["Vue", "Express", "MySQL", "AJAX", "REST APIs", "Full-stack"]
    },
    {
      src: Discord,
      codeUrl: "https://github.com/Jesse-11/DracoX",
      demoUrl: "",
      title: "DracoX",
      description: "Python Discord automation bot built around event-driven commands and community workflow utilities.",
      technologies: ["Python", "Discord API", "Automation", "Async Workflows"]
    },
    {
      src: Med,
      codeUrl: "https://github.com/Jesse-11/Qt-Application-Startup",
      demoUrl: "",
      title: "Medical Dashboard",
      description: "Cross-platform healthcare prototype covering consultations, prescriptions, appointments, and user health overviews.",
      technologies: ["C++", "Qt", "WCAG", "Git", "Jira", "Confluence"]
    },
    {
      src: Website,
      codeUrl: "https://github.com/Jesse-11/Personal-Portfolio",
      demoUrl: "",
      title: "My Portfolio",
      description: "Responsive React portfolio deployed with Netlify and tuned around a maintainable component and styling system.",
      technologies: ["React", "Vite", "Netlify", "CSS Modules", "ESLint"]
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.src}
            codeUrl={project.codeUrl}
            demoUrl={project.demoUrl}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
