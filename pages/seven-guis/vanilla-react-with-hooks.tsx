import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import styles from '../../styles/VanillaReactWithHooks.module.css';

export const VanillaReactWithHooks: NextPage = () => (
  <div className={styles.container}>
    <h1>Vanilla React with Hooks</h1>
    <main className={styles.demo}>
      <h2>01 - Counter</h2>
      <iframe
        src="https://codesandbox.io/embed/vanilla-react-with-hooks-erlwi?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.tsx&theme=dark"
        style={{
          border: 0,
          borderRadius: 4,
          height: 500,
          overflow: 'hidden',
          width: '100%',
        }}
        title="vanilla-react-with-hooks"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </main>
    <div>
      <Link href="/seven-guis">⬅️ Return to 7 GUIs</Link>
    </div>
  </div>
);

export default VanillaReactWithHooks;
