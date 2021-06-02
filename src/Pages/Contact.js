import React from 'react';
import NavBar from '../Components/NavBar';
import styles from '../Styles/Pages/Contact.module.css';

export default function Contact() {
  return(
    <>
    <NavBar />
    <h1 className={styles.titleContact}>Contact Page</h1>
    </>
  );
}