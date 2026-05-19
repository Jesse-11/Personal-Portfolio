import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.contactShell}>
        <div className={styles.contactInfo}>
          <p className={styles.eyebrow}>Get in touch</p>
          <h2>Have a role, project, or idea worth building?</h2>
          <p>
            I am always keen to talk about software engineering internships,
            graduate roles, and meaningful product work.
          </p>

          <div className={styles.contactLinks}>
            <a href="mailto:jesse.hoppo11@gmail.com">jesse.hoppo11@gmail.com</a>
            <a href="https://linkedin.com/in/jesse11" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/Jesse-11" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <form
          className={styles.form}
          action="https://formspree.io/f/xjkvlqpa"
          method="POST"
        >
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input
                className={styles.input}
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Your Email</label>
              <input
                className={styles.input}
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              className={styles.textarea}
              name="message"
              id="message"
              placeholder="Tell me what you are working on"
              required
            ></textarea>
          </div>
          <button className={`${styles.submitButton} button`} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
