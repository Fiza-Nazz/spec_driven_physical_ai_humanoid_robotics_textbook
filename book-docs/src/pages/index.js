import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BookDescriptionSection from '@site/src/components/BookDescription'; // Re-add the import

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}> {/* Wrapper for text content */}
          <Heading as="h1" className="hero__title">
            Master Physical AI & Humanoid Robotics
          </Heading>
          <p className="hero__subtitle">A beginner-to-advanced practical guide to intelligent machines</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Start Learning
            </Link>
          </div>
        </div>
        <img src="/img/image.png" alt="Robotics Image" className={styles.heroImage} /> {/* Image added */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <BookDescriptionSection /> {/* Re-add the component rendering */}
      </main>
    </Layout>
  );
}
