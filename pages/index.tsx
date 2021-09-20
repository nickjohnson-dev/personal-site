import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  useEffect(() => {
    console.log('Client side code here!');
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Nick Johnson | Front-End Developer</title>
      </Head>
      <main>
        <section className={styles.stack1}>
          <header className={styles.stack3}>
            <h1 className={styles.headline}>Nick Johnson</h1>
            <h2 className={styles.subheader}>Senior Front-End Developer</h2>
          </header>
          <section className={styles.stack2}>
            <h2 className={styles.categoryHeader}>Projects</h2>
            <ul className={styles.list}>
              <li>
                <Link href="/aria">🎵 Aria</Link>
              </li>
            </ul>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Home;
