import React from 'react';
import styles from '../Styles/Pages/Home.module.css';
import Typewriter from "typewriter-effect";
import Lottie from 'react-lottie';
import animationData from '../assets/animation.json';
import NavBar from '../Components/NavBar';

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
   <>
    <NavBar />

    <div id={styles.homeContentPage} className="container-fluid">
      <div id={styles.fadeIn} className="row">
        <div className="col-5">
          <div id={styles.contentPageHome} className="container-fluid">
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
        <div id="contentHomePageRight" className="col-7">
          <div className={styles.fadeIn}>
            <Lottie
              options={defaultOptions}
              style={{marginTop:"15vh", marginLeft:"10vh"}}
              height={600}
              width={840}
            />
          </div>
        </div>
      </div>
    </div>
   </>
  );
}