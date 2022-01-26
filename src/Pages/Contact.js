import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import styles from '../Styles/Pages/Contact.module.css';
import Lottie from 'react-lottie';
import animationData from '../assets/Contact.json';

import git from '../assets/social/git.json'
import insta from '../assets/social/insta.json'
import linkedin from '../assets/social/linkedin.json'
import whapp from '../assets/social/whap.json'


export default function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const gitLottie = {
    loop: false,
    autoplay: false,
    animationData: git,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const whappLottie = {
    loop: false,
    autoplay: false,
    animationData: whapp,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const instaLottie = {
    loop: false,
    autoplay: false,
    animationData: insta,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const linkedinLottie = {
    loop: false,
    autoplay: false,
    animationData: linkedin,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [isGit, setGit] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false,
  })
  const [isInsta, setInsta] = useState(false);
  const [animationState2, setAnimationState2] = useState({
    isStopped: false, isPaused: false,
  })
  const [isWhapp, setWhapp] = useState(false);
  const [animationState3, setAnimationState3] = useState({
    isStopped: false, isPaused: false,
  })
  const [isLinke, setLinke] = useState(false);
  const [animationState4, setAnimationState4] = useState({
    isStopped: false, isPaused: false,
  })

  return (
    <div id="fadeIn">
      <NavBar />
      <div id={styles.contentContactPage} className="container-fluid">
        <div id={styles.fadeIn} className="row">
          <div id={styles.cotentBody} className="col-6">
            <div className={styles.textContent}>
              <p id={styles.keyColor}>{'<'}</p>
              <p id={styles.contactColor}>
                Contato
              </p>
              <p id={styles.keyColor}>{'>'}</p>
            </div>
            <div className={styles.contentText}>
              <p id={styles.textContactPage}>
              Olá, então este é meu perfil de desenvolvedor 
              e meu portfólio, espero que gostem, aproveitem 
              e entrem em contato:
              </p>
            </div>

            <div className={styles.contentInformations}>
              <a href="https://github.com/EdLoth" target="_blank" rel="noreferrer"
                onMouseEnter={() => {
                  setAnimationState({
                    ...animationState,
                    isStopped: !animationState.isStopped,
                  })
                  setGit(!isGit)
                }} className={styles.btnSwitch}>

                <div className={styles.animationPointer}>
                  <Lottie
                    options={gitLottie}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused}
                    height={100}
                    width={100}
                  />
                </div>
              </a>

              <a href="https://www.instagram.com/eduardo.sram/" target="_blank" rel="noreferrer"
                onMouseEnter={() => {
                  setAnimationState2({
                    ...animationState2,
                    isStopped: !animationState2.isStopped,
                  })
                  setInsta(!isInsta)
                }} className={styles.btnSwitch}>
                <div className={styles.animationPointer}>
                  <Lottie
                    options={instaLottie}
                    isStopped={animationState2.isStopped}
                    isPaused={animationState2.isPaused}
                    height={100}
                    width={100}
                  />
                </div>
              </a>

              <a href="https://api.whatsapp.com/send?phone=5571992445546&text=Olá Eduardo, tenho interesse no seu trabalho!" target="_blank" rel="noreferrer"
                onMouseEnter={() => {
                  setAnimationState3({
                    ...animationState3,
                    isStopped: !animationState3.isStopped,
                  })
                  setWhapp(!isWhapp)
                }} className={styles.btnSwitch}>
                <div className={styles.animationPointer}>
                  <Lottie
                    options={whappLottie}
                    isStopped={animationState3.isStopped}
                    isPaused={animationState3.isPaused}
                    height={100}
                    width={100}
                  />
                </div>
              </a>

              <a href="https://www.linkedin.com/in/dev-eduardo-ramos/" target="_blank" rel="noreferrer"
                onMouseEnter={() => {
                  setAnimationState4({
                    ...animationState4,
                    isStopped: !animationState4.isStopped,
                  })
                  setLinke(!isLinke)
                }} className={styles.btnSwitch}>
                <div className={styles.animationPointer}>
                  <Lottie
                    options={linkedinLottie}
                    isStopped={animationState4.isStopped}
                    isPaused={animationState4.isPaused}
                    height={100}
                    width={100}
                  />
                </div>
              </a>
            </div>
          </div>
          <div id={styles.cotentBody} className="col-6">
            <div id={styles.LottieImg} className={styles.fadeIn}>
              <Lottie
                options={defaultOptions}
                style={{ marginLeft: "10vh" }}
                height={600}
                width={740}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}