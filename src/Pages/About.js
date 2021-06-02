import React from 'react';
import styles from '../Styles/Pages/About.module.css';
import NavBar from '../Components/NavBar'

export default function About() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className={styles.titleAbout}>About Page</h1>
          </div>
          <div className="row">
            <div className="container">
              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}