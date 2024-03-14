import styles from'./Sobre.module.css'
import avatar from './images/Eu.png'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";




function Sobre(){
  return(
    <section className={styles.sobre}>

    <div className={styles.bio}>
      <figure>
        <img src={avatar} className={styles.avatar} alt="Lino Jorge" />
      </figure>
      <div className={styles.textos}>
        <h2>Sobre</h2>

        <p>Sou <span>Lino jorge</span> <br/>
        
        <strong>Dev Full Stack </strong></p>

        <p>Acadêmico de Engenharia da Computação 5° peíodo</p>

        <p>Faço criações de aplicações dinâmicas e intuitivas</p>
      </div>
    </div>

    <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
          <FaHtml5 className={styles.ico}/>
          <FaCss3 className={styles.ico}/>
          <IoLogoJavascript className={styles.ico}/>
          <FaReact className={styles.ico}/>
          <FaNodeJs className={styles.ico}/>
          <PiFileSql className={styles.ico}/>
        </div> 
    </div>

  </section>
  
  )
}

export default Sobre