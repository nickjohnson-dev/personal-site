import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ariaNotesEditorImage from '../public/img/20210920-aria-notes-editor.png';
import styles from '../styles/Aria.module.css';

export const Aria: NextPage = () => (
  <div className={styles.container}>
    <main className={styles.stack}>
      <h1 className={styles.headline}>Aria</h1>
      {false && (
        <div className={styles.image}>
          <Image
            alt="Aria Notes Editor"
            layout="responsive"
            src={ariaNotesEditorImage}
          />
        </div>
      )}
      <a href="https://ariaapp.netlify.app" target="_blank" rel="noreferrer">
        🔗 Live Application (🔒 Login required)
      </a>
      <a
        href="https://aria-client-storybook.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        📖 Application Storybook (No Login required)
      </a>
      <a href="https://aria-ui.netlify.app" target="_blank" rel="noreferrer">
        📖 Component Library Storybook
      </a>
      <a
        href="https://github.com/aria-app/aria-client"
        target="_blank"
        rel="noreferrer"
      >
        💻 GitHub - Main Site
      </a>
      <a
        href="https://github.com/aria-app/aria-client"
        target="_blank"
        rel="noreferrer"
      >
        💻 GitHub - Component Library
      </a>
      <a
        href="https://github.com/aria-app/aria-client"
        target="_blank"
        rel="noreferrer"
      >
        💻 GitHub - API
      </a>
      <Link href="/">⬅️ Return Home</Link>
    </main>
  </div>
);

export default Aria;
