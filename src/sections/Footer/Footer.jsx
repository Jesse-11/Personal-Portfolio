import styles from './FooterStyles.module.css';

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <section  className={styles.footer}>
      <footer>
      &copy; {currentYear} Jesse Hoppo. All rights reserved.
        
      </footer>
    </section>
  );
}

export default Footer;