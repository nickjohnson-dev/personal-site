import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import styles from '../../styles/SevenGuis.module.css';

export const SevenGuis: NextPage = () => (
  <div className={styles.container}>
    <ul className={styles.stack}>
      <h1>7 GUIs</h1>
      <li>
        <Link href="/seven-guis/vanilla-react-with-hooks">
          Vanilla React with Hooks
        </Link>
      </li>
      <li>
        <Link href="/">🏠 Home</Link>
      </li>
    </ul>
  </div>
);

export default SevenGuis;
