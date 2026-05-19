import styles from './AboutStyles.module.css';

function About() {
  const notes = [
    {
      title: 'SYSTEMS MINDED',
      body: 'I enjoy understanding how software behaves underneath the interface: networks, data flow, persistence, automation, and the details that make systems reliable.'
    },
    {
      title: 'PRODUCT AWARE',
      body: 'I like building tools around real workflows, especially when the software can remove repetitive work or make complex information easier to act on.'
    },
    {
      title: 'PRACTICAL TEAMMATE',
      body: 'I deeply value clear documentation, calm delivery habits, and small improvements that make a team easier to onboard, support, and scale.'
    }
  ];

  return (
    <section id="about" className={styles.container}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>About</p>
        <h1>Engineer with a practical systems streak.</h1>
        <p>
          I am a Software Engineering Honours student at Adelaide University
          and a SWE Intern at AEMO. My work tends to sit where
          backend systems, infrastructure automation, observability, and product
          thinking meet.
        </p>
        <p>
          I am drawn to software and tools that provide real-world impact and value to users. 

        </p>
      </div>

      <div className={styles.notes}>
        {notes.map((note) => (
          <article key={note.title} className={`${styles.noteCard} revealOnScroll`}>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
