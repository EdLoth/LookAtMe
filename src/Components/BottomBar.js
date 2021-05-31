import React from 'react';

import styles from '../Styles/Components/Bottombar.module.css';

export default function BottomBar() {
  return (
    <div class={styles.navbar}>
      <button to="/" class={styles.buttonBottomBar}>Home</button>
      <button to="/About" class={styles.buttonBottomBar}>About</button>
      <button to="/Contact" class={styles.buttonBottomBar}>Contact</button>
      <button to="/Works" class={styles.buttonBottomBar}>Works</button>
    </div>
  );
}