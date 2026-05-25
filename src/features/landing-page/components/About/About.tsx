import styles from './About.module.scss';
import bgImage from '@/assets/images/hero_background.png';
import aboutTitleImg from '@/assets/images/about_title.png';
import peacefulTitle from '@/assets/images/peacefule_friendly_title.png';
import economyTitle from '@/assets/images/dynamic_economy_title.png';
import eventsTitle from '@/assets/images/community_events_title.png';
import poppyIcon from '@/assets/images/Poppy.png';
import minecoinIcon from '@/assets/images/minecoin.png';
import swordIcon from '@/assets/images/diamond_sword.png';
import { clsx } from 'clsx';

const FEATURES = [
  {
    title: "Peaceful and Friendly",
    titleImage: peacefulTitle,
    description: "We aim to create a safe place where griefing is not allowed, and we work hard to build a community based on trust.",
    icon: poppyIcon,
    image: "https://placehold.co/600x400/1e052d/C850F2?text=Image+Placeholder"
  },
  {
    title: "Server Economy",
    titleImage: economyTitle,
    description: "The server works to keep the economy dynamic, making it easy for everyone to trade and grow.",
    icon: minecoinIcon,
    image: "https://placehold.co/600x400/1e052d/C850F2?text=Image+Placeholder"
  },
  {
    title: "Community Events",
    titleImage: eventsTitle,
    description: "Join our server events! We offer fun challenges and rewards for everyone, no matter your skill level.",
    icon: swordIcon,
    image: "https://placehold.co/600x400/1e052d/C850F2?text=Image+Placeholder"
  }
];

export const About = () => {
  return (
    <section
      className={styles.about}
      id="about"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(15 2 20 / 10%), rgb(15 2 20 / 40%)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: 'saturate(1.1) brightness(1.1)'
      }}
    >
      <div className={clsx("container", styles.about__content)}>
        <header className={styles.about__header}>
          <h2 className={styles.about__title}>
            <img src={aboutTitleImg} alt="A World Built for Everyone" className={styles.about__titleImage} />
            <span className="sr-only">A World Built for Everyone</span>
          </h2>
          <p className={styles.about__intro}>
            Seraphyx SMP is more than just a server, it’s a community focused on peace and growth.
          </p>
        </header>

        <div className={styles.about__rows}>
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className={clsx(styles.about__row, index % 2 !== 0 && styles['about__row--reverse'])}
            >
              <div className={styles.about__visual}>
                <img src={feature.image} alt={feature.title} className={styles.about__image} />
              </div>

              <div className={styles.about__text}>
                <div className={styles['about__card-header']}>
                  <img src={feature.icon} alt="" className={styles['about__card-iconImage']} />
                  <h3 className={styles['about__card-title']}>
                    <img src={feature.titleImage} alt={feature.title} className={styles['about__card-titleImage']} />
                    <span className="sr-only">{feature.title}</span>
                  </h3>
                </div>
                <p className={styles['about__card-description']}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
