import styles from './JoinGuide.module.scss';
import howToPanel from '@/assets/images/how_to_panel.png';
import skinWave from '@/assets/images/skin_render_wave.png';
import bgImage from '@/assets/images/hero_background.png';
import { clsx } from 'clsx';

const STEPS = [
  {
    number: "01",
    title: "Server Name",
    description: "Enter 'Seraphyx SMP' as the name. It helps you find us easily in your server list."
  },
  {
    number: "02",
    title: "Server Address",
    description: "Input 'seraphyx.usga.me'. Double check for any typos to ensure a smooth connection."
  },
  {
    number: "03",
    title: "Port",
    description: "Keep the default port unless instructed otherwise. Hit 'Add' and you're ready to play!"
  }
];

export const JoinGuide = () => {
  return (
    <section
      className={styles.join}
      id="join"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(15 2 20 / 10%), rgb(15 2 20 / 40%)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: 'saturate(1.1) brightness(1.1)'
      }}
    >
      <div className={clsx("container", styles.join__container)}>
        <header className={styles.join__header}>
          <h2 className={styles.join__title}>Join the Journey</h2>
          <p className={styles.join__subtitle}>
            Setting up your connection is simple. Follow the configuration below.
          </p>
        </header>

        <div className={styles.join__visualWrapper}>
          <div className={styles.join__panelContainer}>
            <img
              src={howToPanel}
              alt="Minecraft Server Setup UI"
              className={styles.join__panel}
            />
            <img
              src={skinWave}
              alt=""
              className={styles.join__skinWave}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className={styles.join__steps}>
          {STEPS.map((step, index) => (
            <div key={index} className={styles.join__step}>
              <div className={styles['join__step-number']}>{step.number}</div>
              <div className={styles['join__step-content']}>
                <h3 className={styles['join__step-title']}>{step.title}</h3>
                <p className={styles['join__step-description']}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
