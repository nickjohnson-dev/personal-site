import type { NextPage } from 'next';
import React from 'react';

import styles from '../styles/SevenGuis.module.css';

export const SevenGuis: NextPage = () => (
  <div className={styles.container}>
    <h1>7 GUIs</h1>
    <ul>
      <li>Vanilla React with Hooks</li>
    </ul>
  </div>
);

export default SevenGuis;
