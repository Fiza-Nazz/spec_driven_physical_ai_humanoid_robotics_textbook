import clsx from 'clsx';
import Link from '@docusaurus/Link'; // Import Link for the button
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const ModuleList = [
  {
    title: 'Foundations of Robotics & AI',
    description: (
      <>
        Explore the core concepts of AI, machine learning, and fundamental robotics principles that underpin intelligent machines.
      </>
    ),
    link: '/docs/chapters/intro', // Link to the intro chapter
  },
  {
    title: 'Robot Kinematics & Dynamics',
    description: (
      <>
        Dive into the mathematics of robot motion, understanding how robots move, balance, and interact with their environment.
      </>
    ),
    link: '/docs/chapters/kinematics', // Link to the kinematics chapter
  },
  {
    title: 'Sensing & Perception for Robots',
    description: (
      <>
        Learn how robots 'see' and 'understand' their surroundings using cameras, lidar, and other advanced sensors.
      </>
    ),
    link: '/docs/chapters/sensing-perception', // Corrected link
  },
  {
    title: 'Robot Control & Navigation',
    description: (
      <>
        Master algorithms for robot control, path planning, and autonomous navigation in complex and dynamic spaces.
      </>
    ),
    link: '/docs/chapters/control-navigation', // Corrected link
  },
  {
    title: 'Human-Robot Interaction (HRI)',
    description: (
      <>
        Understand the principles of designing intuitive and safe interactions between humans and humanoid robots.
      </>
    ),
    link: '/docs/chapters/hri', // Corrected link
  },
  {
    title: 'Advanced Topics & Future of AI Robotics',
    description: (
      <>
        Explore cutting-edge research, ethical considerations, and the future trends shaping physical AI and humanoid robotics.
      </>
    ),
    link: '/docs/chapters/advanced-future', // Corrected link
  },
];

function Module({title, description, link}) {
  return (
    <div className={clsx('col col--4', styles.moduleItem)}> {/* Added styles.moduleItem for potential custom styling */}
      <div className="card padding--lg text--center"> {/* Use card for professional look */}
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary" // Use primary button style
            to={link}>
            Open Module
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ModuleList.map((props, idx) => (
            <Module key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}