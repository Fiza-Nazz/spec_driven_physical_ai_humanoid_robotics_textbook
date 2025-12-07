import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link'; // Import Link for potential CTAs within the description

function BookDescriptionSection() {
  return (
    <section className={clsx(styles.bookDescriptionSection, 'hero--primary')}>
      <div className="container">
        <div className="row">
          <div className="col col--10 col--offset-1 text--center">
            <h2 className={styles.sectionTitle}>Unlock the Future of Intelligent Machines</h2>
            <p className={clsx(styles.sectionSubtitle, 'margin-bottom--lg')}>
              "Physical AI & Humanoid Robotics: Intelligent Machines in Action" is your definitive guide to understanding, building, and programming the next generation of smart robotic systems. From foundational theories to cutting-edge applications, this book provides a meticulously crafted journey for enthusiasts and professionals alike.
            </p>
            <div className="row">
              <div className="col col--4">
                <div className={clsx('card', styles.descriptionCard)}>
                  <h3 className={styles.cardTitle}>Comprehensive Coverage</h3>
                  <p className={styles.cardText}>Delve into AI, machine learning, and advanced robotics, covering kinematics, perception, and control systems.</p>
                </div>
              </div>
              <div className="col col--4">
                <div className={clsx('card', styles.descriptionCard)}>
                  <h3 className={styles.cardTitle}>Hands-on Mastery</h3>
                  <p className={styles.cardText}>Apply theoretical knowledge through practical, reproducible code examples and real-world projects.</p>
                </div>
              </div>
              <div className="col col--4">
                <div className={clsx('card', styles.descriptionCard)}>
                  <h3 className={styles.cardTitle}>Future-Proof Insights</h3>
                  <p className={styles.cardText}>Explore ethical AI, human-robot interaction, and the transformative future of intelligent machines.</p>
                </div>
              </div>
            </div>
            <div className={styles.ctaButtonWrapper}>
              <Link
                className={clsx('button button--secondary button--lg', styles.learnMoreButton)}
                to="/docs/intro">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDescriptionSection;
