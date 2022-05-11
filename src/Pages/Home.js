import React from 'react';
import styles from '../Styles/Pages/Home.module.css';
import Typewriter from "typewriter-effect";


import Lottie from 'react-lottie';
import animationData from '../assets/animation.json';
// import switchLottie from '../assets/toggleTheme.json';
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

  // Obtém a data/hora atual
  const dateObj = new Date();
  const dayName = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"]
  const monName = ["janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro"]

  console.log("<h1> Hoje é " + dayName[dateObj.getDay() ] + ", " + dateObj.getDate () + " de " + monName[dateObj.getMonth() ]   +  " de "  +     dateObj.getFullYear () + ". </h1>")

  // const switchLottieOptions = {
  //   loop: false,
  //   autoplay: false,
  //   animationData: switchLottie,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

  // const [isClicked, setClicked] = useState(false);
  // const [animationState, setAnimationState] = useState({
  //   isStopped: true, isPaused: false,
  //   direction: -1,
  // })


  return (
    <div id="fadeIn">
      <NavBar />

      <div id={styles.homeContentPage} className="container-fluid">

        <div id={styles.fadeIn} className="row">
          <div id={styles.contentHomeResponsive} className="container-fluid">

            <div className="col-6 d-flex align-items-center">
              <div className={styles.fadeIn}>
                <Lottie
                  options={defaultOptions}
                  style={{ marginLeft: "5vh" }}
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
                <Link to="/About" id={styles.buttonLeanMore}>Ver Mais</Link>
              </div>

            </div>
          </div>


        </div>
        <div className="row" >
          <div className="col-12" id={styles.contentSwitchTheme}>
          <h1 className={styles.dateHome}> 
          { dayName[dateObj.getDay() ] + ", " + dateObj.getDate ()} {monName[dateObj.getMonth()]}
          </h1>
            {/* <button onClick={() => {
              const reverseAnimation = -1;
              const normalAnimation = 1;

              setAnimationState({
                ...animationState,
                isStopped: false,
                direction: animationState.direction === normalAnimation
                  ? reverseAnimation
                  : normalAnimation,
              })
              setClicked(!isClicked)
            }} className={styles.btnSwitch}>
              <div className={styles.animationPointer}>
                <Lottie
                  direction={animationState.direction}
                  options={switchLottieOptions}
                  style={{ borderRadius: "28px" }}
                  isStopped={animationState.isStopped}
                  isPaused={animationState.isPaused}
                  height={50}
                  width={120}
                />
              </div>
            </button> */}
          </div>
        </div>
      </div>s
    </div>
  );
}