import styles from './Contatos.module.css'
import {BsWhatsapp,BsInstagram, BsYoutube, BsGithub, BsLinkedin} from 'react-icons/bs'

function Contatos(){
  return(
   <>
      <section className={styles.contatos}>
        <h2>Contatos</h2>
        <h3>Entre em Contato</h3>
        <p>Para que possamos conversar mais sobre.</p>
        
        <div className={styles.icones}>
          <a href='mailto:linox999@gmail.com' target="_blank" rel='noopener noreferrer'>
            <BsWhatsapp className={styles.icone}/>
          </a>
          <a href='https://www.instagram.com/tibureco_/' target="_blank" rel='noopener noreferrer'>
            <BsInstagram className={styles.icone}/>
          </a>
          <BsYoutube className={styles.icone}/>
          <BsGithub className={styles.icone}/>
          <BsLinkedin className={styles.icone}/>
        </div>
      </section>
   </>
    )
}

export default Contatos