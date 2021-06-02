import React from 'react';
import NavBar from '../Components/NavBar';
import styles from '../Styles/Pages/Works.module.css';

export default function Works() {
  return(
  <>
  <NavBar />
    <h1 className={styles.titleWorks}>Works Page</h1>
  </>
  );
}