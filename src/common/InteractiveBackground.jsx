import {useEffect} from 'react';
import styles from './InteractiveBackground.module.css';

function InteractiveBackground() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight * 0.3
    };

    const trail = Array.from({length: 8}, (_, index) => ({
      x: pointer.x,
      y: pointer.y,
      speed: 0.24 - index * 0.018
    }));

    const updatePointer = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    const animateTrail = () => {
      trail.forEach((point, index) => {
        const target = index === 0 ? pointer : trail[index - 1];

        point.x += (target.x - point.x) * point.speed;
        point.y += (target.y - point.y) * point.speed;

        document.documentElement.style.setProperty(`--trail-${index + 1}-x`, `${point.x}px`);
        document.documentElement.style.setProperty(`--trail-${index + 1}-y`, `${point.y}px`);
      });

      animationFrameId = window.requestAnimationFrame(animateTrail);
    };

    let animationFrameId = window.requestAnimationFrame(animateTrail);

    window.addEventListener('pointermove', updatePointer, {passive: true});

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', updatePointer);
    };
  }, []);

  return (
    <div className={styles.background} aria-hidden="true">
      <span className={`${styles.trailDot} ${styles.trailDotOne}`} />
      <span className={`${styles.trailDot} ${styles.trailDotTwo}`} />
      <span className={`${styles.trailDot} ${styles.trailDotThree}`} />
      <span className={`${styles.trailDot} ${styles.trailDotFour}`} />
      <span className={`${styles.trailDot} ${styles.trailDotFive}`} />
      <span className={`${styles.trailDot} ${styles.trailDotSix}`} />
      <span className={`${styles.trailDot} ${styles.trailDotSeven}`} />
      <span className={`${styles.trailDot} ${styles.trailDotEight}`} />
    </div>
  );
}

export default InteractiveBackground;
