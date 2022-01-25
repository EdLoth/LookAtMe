import React from 'react';
import styles from '../Styles/Pages/About.module.css';
import NavBar from '../Components/NavBar'
import Typewriter from "typewriter-effect";

//Importante imagens do carrousel
import s1 from '../assets/skills/1.svg'
import s2 from '../assets/skills/2.svg'
import s3 from '../assets/skills/3.svg'
import s4 from '../assets/skills/4.svg'
import s5 from '../assets/skills/5.svg'
import s6 from '../assets/skills/6.svg'
import s7 from '../assets/skills/7.svg'
import s8 from '../assets/skills/8.svg'


import t1 from '../assets/tools/t1.svg'
import t2 from '../assets/tools/t2.svg'
import t3 from '../assets/tools/t3.svg'
import t4 from '../assets/tools/t4.svg'
import t5 from '../assets/tools/t5.svg'
import t6 from '../assets/tools/t6.svg'
import t7 from '../assets/tools/t7.svg'


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
              <div className="row">
                <div className="col-12">
                  <div className={styles.contentImgSkills}>
                    <a href="https://pt-br.reactjs.org/" target="_blank" className={styles.itemSkill}>
                      <img src={s4} class={styles.imgProperty} />
                    </a>
                    <a href="https://reactnative.dev/" target="_blank" className={styles.itemSkill}>
                      <img src={s8} class={styles.imgProperty} />
                    </a>
                    <a href="https://nextjs.org/" target="_blank" className={styles.itemSkill}>
                      <img src={s1} class={styles.imgProperty} />
                    </a>
                    <a href="https://www.typescriptlang.org/" target="_blank" className={styles.itemSkill}>
                      <img src={s5} class={styles.imgProperty} />
                    </a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" className={styles.itemSkill}>
                      <img src={s6} class={styles.imgProperty} />
                    </a>
                    <a href="https://getbootstrap.com/" target="_blank" className={styles.itemSkill}>
                      <img src={s2} class={styles.imgProperty} />
                    </a>
                    <a href="https://styled-components.com/" target="_blank" className={styles.itemSkill}>
                      <img src={s3} class={styles.imgProperty} />
                    </a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" className={styles.itemSkill}>
                      <img src={s7} class={styles.imgProperty} />
                    </a>
                  </div>
                </div>
              </div>
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
              <div className="row">
                <div className="col-12">
                  <div className={styles.contentImgSkills}>
                    <a href="https://www.figma.com/" target="_blank"className={styles.itemSkill}>
                      <img src={t1} class={styles.imgProperty} />
                    </a>
                    <a href="https://insomnia.rest/" target="_blank"className={styles.itemSkill}>
                      <img src={t2} class={styles.imgProperty} />
                    </a>
                    <a href="https://expo.dev/" target="_blank"className={styles.itemSkill}>
                      <img src={t3} class={styles.imgProperty} />
                    </a>
                    <a href="https://code.visualstudio.com/" target="_blank"className={styles.itemSkill}>
                      <img src={t4} class={styles.imgProperty} />
                    </a>
                    <a href="https://vercel.com/dashboard" target="_blank"className={styles.itemSkill}>
                      <img src={t5} class={styles.imgProperty} />
                    </a>
                    <a href="https://github.com/" target="_blank"className={styles.itemSkill}>
                      <img src={t6} class={styles.imgProperty} />
                    </a>
                    <a href="https://git-scm.com/" target="_blank"className={styles.itemSkill}>
                      <img src={t7} class={styles.imgProperty} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}