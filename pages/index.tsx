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
          <header className={styles.stack3}>
            <h1 className={styles.headline}>Nick Johnson</h1>
            <h2 className={styles.subheader}>Front-End Developer</h2>
          </header>
          <section className={styles.stack2}>
            <h2 className={styles.categoryHeader}>Projects</h2>
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
