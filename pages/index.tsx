import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nick Johnson | Front-End Developer</title>
      </Head>
      <main>
        <section className={styles.stack1}>
          <h1 className={styles.headline}>
            <strong>Nick Johnson</strong> | Front-End Developer
          </h1>
          <section className={styles.stack2}>
            <h2 className={styles.subheader}>Projects</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a
                  href="https://ariaapp.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Aria Sequencer
                </a>
              </li>
            </ul>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Home;
