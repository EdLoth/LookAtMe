import React from 'react';
import styles from '../Styles/Pages/About.module.css';
import NavBar from '../Components/NavBar'
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div id={styles.contentPageAbout} className="col-12">
            <div className={styles.contentAbout}>
              <div className={styles.titleAboutContent}>
                <h1 className={styles.titleAboutChar}>{"<"}</h1>
                <h1 className={styles.titleAbout}>{"Sobre"}</h1>
                <h1 className={styles.titleAboutChar}>{">"}</h1>
              </div>
            
            <div className={styles.contentDescriptionAbout}>
              <p className={styles.descriptionAboutMe}>
              Tenho 20 anos, sou de Salvador, capital do estado da Bahia. 
              Comecei a programar em 2017, e dei inicio no curso técnico de Desenvolvimento de Sistemas no Senai em Janeiro 2018,
             e conclui em junho de 2019. Atualmente estou trabalhando Home Oficce na Urbit como Programador júnior.
              </p>
              <p className={styles.descriptionAboutMe}>
              Sou apaixonado por desenvolvimento web, principalmente em tecnologias que utilizam 
              como React.js, Next.js, React-Native. Também toco uma Startup a Vogar Studios Creative, onde aceitamos diversos trabalhos freelancer.
              </p>
            </div>
            </div>
          </div>
        </div>
        <div id={styles.contentSection2} className="row">
            <div className="container">
              <div id={styles.carrousel1} className="container-fluid">
              <h1 id={styles.functionAboutPage}>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      strings: [
                        "_Skills",
                        "_Habilidades",
                      ]
                    }}
                  />
                </h1>
              </div>
              <div id={styles.carrousel1} className="container-fluid">
              <h1 id={styles.functionAboutPage}>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      strings: [
                        "Tools_",
                        "Ferramentas_",
                      ]
                    }}
                  />
                </h1>
              </div>
            </div>
        </div>
        <div className="row">
          <div id={styles.contentPageAbout} className="col-12">
            <div className={styles.contentAbout}>
              <div className={styles.titleAboutContent}>
                <h1 className={styles.titleAboutChar}>{"<"}</h1>
                <h1 className={styles.titleAbout}>{"Sobre"}</h1>
                <h1 className={styles.titleAboutChar}>{">"}</h1>
              </div>
            
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}