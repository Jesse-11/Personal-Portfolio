import styles from './ExperienceStyles.module.css';

function Experience() {
  const experienceItems = [
    {
      role: 'Software Engineering Intern',
      organization: 'Australian Energy Market Operator (AEMO)',
      period: 'Dec 2025 - Present',
      summary: 'Building internal tooling, automation, observability, and data workflow improvements across energy market systems.',
      highlights: [
        'Implemented data integrity checks with Git hooks and R-based directory hashing.',
        'Improved CI/CD workflows with Docker and Azure DevOps.',
        'Led ELK stack deployment across RHEL environments using Podman and Pyinfra.'
      ],
      tags: ['R', 'Python', 'SQL', 'Docker', 'Azure DevOps', 'ELK', 'Podman', 'Pyinfra']
    },
    {
      role: 'Heart Failure Information Portal (Capstone Project)',
      organization: 'CEIH Heart Failure Sub-committee',
      period: 'Feb 2026 - Present',
      summary: 'Leading delivery of a proof-of-concept healthcare portal with CMS-backed workflows and accessible product design.',
      highlights: [
        'Coordinated sprint planning, stand-ups, prioritization, and retrospectives as Scrum Lead.',
        'Evaluated Wagtail CMS against scalability, security, accessibility, and usability requirements.',
        'Designed workflows, data structures, content models, and risk management processes.'
      ],
      tags: ['Wagtail', 'Django', 'Jira', 'Agile', 'WCAG', 'Risk Management', 'Healthcare', 'FRs/NFRs']
    },
    {
      role: 'Bachelor of Software Engineering (Honours)',
      organization: 'University of Adelaide',
      period: 'Feb 2023 - Nov 2026',
      summary: 'Coursework and project work spanning systems, networks, cybersecurity, AI, and distributed software.',
      highlights: [
        'Studying data structures, operating systems, computer systems, distributed systems, and networking.',
        'Built projects across C/C++, Java, Python, backend systems, and security-focused tooling.',
        'Applying software engineering practices across team-based design and delivery work.'
      ],
      tags: ['Systems', 'Data Structures', 'Operating Systems', 'Networking', 'Cybersecurity', 'AI', 'Distributed Systems']
    }
  ];

  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <p className={styles.intro}>
        My recent work experince and study has focused on reliable system design, practical automation, 
        and real-world software that supports operational teams and meaningful products.
      </p>

      <div className={styles.timeline}>
        {experienceItems.map((item) => (
          <article key={`${item.role}-${item.organization}`} className={styles.experienceCard}>
            <div className={styles.cardMeta}>
              <span>{item.period}</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardHeader}>
                <div>
                  <h2>{item.role}</h2>
                  <p>{item.organization}</p>
                </div>
              </div>

              <p className={styles.summary}>{item.summary}</p>

              <ul className={styles.highlights}>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
