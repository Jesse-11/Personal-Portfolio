import { useRef, useState } from 'react';
import styles from './NavBar.module.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

function NavBar() {
  const navRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });

  const moveIndicator = (event) => {
    const navBounds = navRef.current?.getBoundingClientRect();
    const linkBounds = event.currentTarget.getBoundingClientRect();

    if (!navBounds) {
      return;
    }

    setIndicator({
      left: linkBounds.left - navBounds.left,
      width: linkBounds.width,
      visible: true
    });
  };

  const hideIndicator = () => {
    setIndicator((current) => ({ ...current, visible: false }));
  };

  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#hero" aria-label="Back to top">
        JH
      </a>
      <nav
        ref={navRef}
        className={styles.nav}
        onMouseLeave={hideIndicator}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onFocus={moveIndicator}
            onMouseEnter={moveIndicator}
          >
            {item.label}
          </a>
        ))}
        <span
          className={styles.indicator}
          style={{
            opacity: indicator.visible ? 1 : 0,
            transform: `translateX(${indicator.left}px)`,
            width: `${indicator.width}px`
          }}
        />
      </nav>
    </header>
  );
}

export default NavBar;
