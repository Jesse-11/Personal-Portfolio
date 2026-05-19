import styles from './SkillsStyles.module.css';

function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      summary: "Comfortable moving between low-level systems work, scripting, and application development.",
      skills: ["C/C++", "Python", "Java", "R", "JS/TS", "SQL/PL/pgSQL"]
    },
    {
      title: "Systems & Backend",
      summary: "Backend fundamentals from networking and concurrency through database internals and APIs.",
      skills: ["Distributed Systems", "Networking", "Concurrency", "Memory Optimization", "REST APIs", "SQL Pipelines"]
    },
    {
      title: "DevOps & Infrastructure",
      summary: "Automation and deployment work across Linux environments and internal engineering workflows.",
      skills: ["Docker", "Podman", "Azure DevOps", "CI/CD", "ELK Stack", "RHEL", "Ubuntu/Arch", "Pyinfra"]
    },
    {
      title: "Frontend & Product",
      summary: "User-facing tools, dashboards, and CMS-backed workflows with attention to accessibility.",
      skills: ["React", "NextJS", "Vue", "Qt", "R Shiny", "Wagtail CMS", "Django", "WCAG", "Figma"]
    },
    {
      title: "Security & Diagnostics",
      summary: "Security coursework and tooling for web, memory, and network investigation.",
      skills: ["GDB", "Ghidra", "Burp Suite", "Nmap", "Metasploit", "Wireshark", "XSS", "CSRF"]
    },
    {
      title: "Delivery & Collaboration",
      summary: "Team-oriented engineering habits for planning, documenting, reviewing, and shipping work.",
      skills: ["Git", "GitHub", "Jira", "Confluence", "Agile", "Technical Docs"]
    }
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <p className={styles.intro}>
        A focused technical toolkit across systems programming, backend services,
        infrastructure, security, and user-facing product work.
      </p>

      <div className={styles.skillsWrapper}>
        {skillGroups.map((group) => (
          <article key={group.title} className={`${styles.skillCard} revealOnScroll`}>
            <div className={styles.skillCardHeader}>
              <span>{group.title.slice(0, 2)}</span>
              <h2>{group.title}</h2>
            </div>
            <p>{group.summary}</p>
            <div className={styles.skillList}>
              {group.skills.map((skill) => (
                <span key={skill} className={styles.skillItem}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
