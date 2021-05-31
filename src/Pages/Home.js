import React from 'react';
import styles from '../Styles/Pages/Home.module.css';
import Typewriter from "typewriter-effect";

import banner from '../assets/banner.png';

export default function Home() {
  return (
    <div id={styles.homeContentPage} className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div id={styles.contentPageHome} className="container">
            <p id={styles.titleHomePage}>Olá,</p>
            <div className={styles.displayNameHome}>
              <p id={styles.subTitleHomePage}>Eu sou </p>
              <p id={styles.nameHomePage}>{"<Eduardo Ramos>"}</p>
            </div>
            <div className={styles.displayNameHome}>
              <p id={styles.descriptionHomePage}>
                Desenvolvedor
            </p>
              <p id={styles.functionHomePage}>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: [
                      "React JS.",
                      "Next JS.",
                      "React Native.",
                      "Flutter.",
                      "Web.",
                    ]
                  }}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img src={banner} alt=""/>
        </div>
      </div>
    </div>
  );
}