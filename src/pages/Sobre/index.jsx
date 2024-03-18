import styles from "./Sobre.module.css";
import avatar from "./images/Eu.jpg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { useEffect, useState } from "react";

function Sobre() {
  const [periodo, setPeriodo] = useState(1);

  useEffect(() => {
    const inicioFaculdade = new Date("01-01-2022");
    const hoje = new Date();
    

    const diferencaMeses =
      (hoje.getFullYear() - inicioFaculdade.getFullYear()) * 12 +
      hoje.getMonth() -
      inicioFaculdade.getMonth();
    const periodoAtual = Math.floor(diferencaMeses / 6) + 1;

    setPeriodo(periodoAtual);
  }, []);

  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <figure>
          <img
            className={styles.avatar}
            src={avatar}
            alt="Lino Jorge"
          />
        </figure>
        <div className={styles.textos}>
          <h2>Sobre</h2>

          <p>
            Sou <span className={styles.hover_animate}>Lino jorge</span> <br />
            <strong>Dev Full Stack</strong> <br />
            Cursando o {periodo}° período de Engenharia da Computação <br />
            Utilizo no frontend ReactJS e no backend com Node.js, Javascript,{" "}
            <br />
            TypeScript MongoDB, MySQL, PostgreSQL.
          </p>
        </div>
      </div>

      <div className={styles.techs}>
        <h2>Techs</h2>
        <div className={styles.icones}>
          <FaHtml5 className={styles.ico} />
          <FaCss3 className={styles.ico} />
          <IoLogoJavascript className={styles.ico} />
          <FaReact className={styles.ico} />
          <FaNodeJs className={styles.ico} />
          <PiFileSql className={styles.ico} />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
