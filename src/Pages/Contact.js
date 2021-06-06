import React from 'react';
import NavBar from '../Components/NavBar';
import styles from '../Styles/Pages/Contact.module.css';
import Lottie from 'react-lottie';
import { FaInstagramSquare, FaWhatsappSquare, FaEnvelopeSquare, FaGithubSquare } from 'react-icons/fa';
import animationData from '../assets/Contact.json';

export default function Contact() {
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
      <div id={styles.contentContactPage} className="container-fluid">
        <div id={styles.fadeIn}className="row">
          <div id={styles.cotentBody} className="col-6">
            <div className={styles.textContent}>
              <p id={styles.keyColor}>{'<'}</p>
              <p id={styles.contactColor}>
                Contato
            </p>
              <p id={styles.keyColor}>{'>'}</p>
            </div>
            <div className={styles.contentInformations}>
              <p id={styles.textContactPage}>
                Hi, so this is my developer profile and my portfolio,
                I hope you like it, enjoy and get in touch:
              </p>
              <div className={styles.socialBar}>
                <div id={styles.socialOne}>
                  <a href="https://github.com/EdLoth" target="_blank"  rel="noreferrer">
                    <FaGithubSquare id={styles.iconSocial} /> <p>EdLoth</p>
                  </a>
                </div>
                <div id={styles.socialOne}>
                  <a href="https://www.instagram.com/eduardo.sram/" target="_blank"  rel="noreferrer">
                    <FaInstagramSquare id={styles.iconSocial} /> <p>@eduardo.sram</p>
                  </a>
                </div>
                <div id={styles.socialOne}>
                  <a href="https://api.whatsapp.com/send?phone=5571992445546&text=Olá Eduardo, tenho interesse no seu trabalho!" target="_blank"  rel="noreferrer">
                    <FaWhatsappSquare id={styles.iconSocial} />  <p> +55 (71) 99244-5546</p>
                  </a>
                </div>
                <div id={styles.socialOne}>
                  <a href="mailto:contatoeduardo.dev@gmail.com?Subject=Hi,%20Eduardo%20Ramos">
                    <FaEnvelopeSquare id={styles.iconSocial} /> <p>contatoeduardo.dev@gmail.com</p>
                  </a>
                </div>
              </div>
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
    </>
  );
}