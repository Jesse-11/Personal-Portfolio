import React from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  // Get the current year for copyright
  const currentYear = new Date().getFullYear();
  
  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.sectionTitle}>Contact</h1>
      <form 
        className={styles.form}
        action="https://formspree.io/f/xjkvlqpa"
        method="POST"
      >
        <div className={styles.formGroup}>
          <input
            className={styles.input}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            className={styles.textarea}
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
      

    </section>
  );
}

export default Contact;