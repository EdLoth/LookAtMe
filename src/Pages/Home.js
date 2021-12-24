import React from 'react';
import styles from '../Styles/Pages/Home.module.css';
import Typewriter from "typewriter-effect";
import Lottie from 'react-lottie';
import animationData from '../assets/animation.json';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';


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
        <div id={styles.contentHomeResponsive} className="container-fluid">

        <div className="col-6 d-flex align-items-center">
            <div className={styles.fadeIn}>
              <Lottie
                options={defaultOptions}
                style={{marginLeft:"5vh"}}
                height={600}
                width={840}
              />
            </div>
          </div>

          <div className="col-6">
            <div id={styles.contentRight} className="container-fluid">
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
              <Link to="/About" id={styles.buttonLeanMore}>Learn More</Link>
            </div>
            
          </div>
        </div>
        

      </div>
    </div>
   </>
  );
}