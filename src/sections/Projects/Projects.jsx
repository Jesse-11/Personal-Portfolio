import styles from './ProjectsStyles.module.css';
import Med from '../../assets/Med4You.webp';
import Discord from '../../assets/Discord-bot.png';
import Amaf from '../../assets/AMAF.png';
import Website from '../../assets/Website.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  const projectsData = [
    {
      codeUrl: "https://github.com/Jesse-11/InFlow",
      demoUrl: "",
      title: "InFlow",
      status: "Private MVP",
      visualLabel: "IF",
      isPrivate: true,
      description: "Accounts receivable SaaS MVP with invoice/customer workflows, payment forecasting, reminder automation, CSV import, local demo persistence, and an Auth.js workspace foundation.",
      technologies: ["Next.js App Router", "TypeScript", "React", "Prisma", "PostgreSQL", "Auth.js", "Tailwind CSS", "Vitest", "CSV Import"]
    },
    {
      src: Amaf,
      codeUrl: "https://github.com/Jesse-11/Volunteer-Event-Webpage",
      demoUrl: "",
      title: "Marine Volunteering",
      description: "Volunteer event platform for coordinating marine conservation activity and community participation.",
      technologies: ["Vue", "Express", "MySQL", "AJAX", "REST APIs", "Full-stack"]
    },
    {
      codeUrl: "https://github.com/Jesse-11/DeadMansDraw",
      demoUrl: "",
      title: "DeadMansDraw",
      status: "Private project",
      visualLabel: "DMD",
      isPrivate: true,
      description: "C++ terminal card game implementation of Dead Man's Draw, focused on game-state modelling, command-line interaction, and turn logic.",
      technologies: ["C++", "Terminal UI", "Game Logic", "OOP", "Data Structures"]
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
      title: "Telehealth Application",
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
            visualLabel={project.visualLabel}
            isPrivate={project.isPrivate}
            status={project.status}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
