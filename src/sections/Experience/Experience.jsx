import styles from './ExperienceStyles.module.css';

function Experience() {
  const experienceItems = [
    {
      role: 'Software Engineer, Intern',
      organization: 'Australian Energy Market Operator (AEMO)',
      organizationUrl: 'https://www.aemo.com.au/',
      period: 'Dec 2025 - Present',
      summary: 'Engineering internal infrastructure, automation, and data tooling for the operator of Australia’s electricity and gas systems.',
      highlights: [
        'Designed ELK logging infrastructure on RHEL 9 with Pyinfra and Podman, improving deployment consistency and operational visibility across production and pre-production services.',
        'Owned a proof-of-concept ML model registry using JFrog Artifactory, working across DevSecOps and internal teams on RBAC, authentication, and model scanning.',
        'Built automated validation with Git pre-commit hooks and R directory hashing to prevent invalid merges across SQL and Oracle data pipelines.',
        'Optimized Docker and Azure DevOps CI/CD workflows, reducing failure rates by 10% and shortening release cycles.',
        'Centralized legacy SMTP automation into a reusable library, saving operational teams more than five engineering hours each week.'
      ],
      tags: ['R', 'Python', 'SQL', 'Oracle', 'Azure DevOps', 'ELK', 'RHEL', 'Podman', 'Pyinfra', 'JFrog Artifactory']
    },
    {
      role: 'Software Developer, POC Capstone Project',
      organization: 'CEIH — Heart Failure Information Portal',
      organizationUrl: 'https://ceih.sa.gov.au/',
      period: 'Feb 2026 - Jul 2026',
      summary: 'Delivering a proof-of-concept healthcare portal for the Commission on Excellence and Innovation in Health.',
      highlights: [
        'Led agile delivery as Scrum Master, coordinating sprint planning, daily stand-ups, task prioritization, and retrospectives in Jira.',
        'Evaluated and justified Wagtail CMS against scalability, security, accessibility, maintainability, and usability requirements.',
        'Designed system processes, data structures, content models, and user workflows for future extensibility.',
        'Developed Wagtail page structures, admin functionality, content models, and database interactions from stakeholder requirements.',
        'Designed a risk management framework covering technical and delivery risks across the project lifecycle.'
      ],
      tags: ['Wagtail', 'Django', 'Python', 'Jira', 'Agile', 'WCAG', 'Risk Management', 'Healthcare']
    },
    {
      role: 'Open-Source Contributor',
      organization: 'Pyinfra',
      organizationUrl: 'https://github.com/pyinfra-dev/pyinfra',
      period: 'Open source',
      summary: 'Beginning open-source contribution work on Pyinfra, a Python-based infrastructure automation tool.',
      highlights: [
        'Added support for hidden variables passed through _env at the correct execution points.',
        'Improved masking behavior so secrets remain hidden in command runs and logs.',
        'Worked within the existing contribution workflow, test expectations, and automation model.'
      ],
      tags: ['Python', 'Pyinfra', 'Infrastructure Automation', 'Secrets Masking', 'Open Source', 'Git']
    }
  ];

  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>

      <div className={styles.experienceList}>
        {experienceItems.map((item) => (
          <article key={`${item.role}-${item.organization}`} className={`${styles.experienceCard} revealOnScroll`}>
            <div className={styles.cardBody}>
              <div className={styles.cardHeader}>
                <div>
                  <h2>{item.role}</h2>
                  <p>
                    <a href={item.organizationUrl} target="_blank" rel="noopener noreferrer">
                      {item.organization} <span aria-hidden="true">↗</span>
                    </a>
                  </p>
                </div>
                <span className={styles.cardMeta}>{item.period}</span>
              </div>

              <p className={styles.summary}>{item.summary}</p>

              <ul className={styles.highlights}>
                {item.highlights.map((highlight, index) => (
                  <li key={highlight}>
                    <span className={styles.highlightIndex}>{String(index + 1).padStart(2, '0')}</span>
                    <span>{highlight}</span>
                  </li>
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
