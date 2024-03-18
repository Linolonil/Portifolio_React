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
          <a href='https://wa.me/5592985515439?text=Ol%C3%A1.' target="_blank" rel='noopener noreferrer' className={styles.icone}>
            <BsWhatsapp />
          </a>
          <a href='https://www.instagram.com/tibureco_/' target="_blank" rel='noopener noreferrer' className={styles.icone}>
            <BsInstagram />
          </a>
          <a href='https://www.youtube.com/watch?v=Lb8W_iJOV_o&t=6s' className={styles.icone} target="_blank" rel='noopener noreferrer'>
          <BsYoutube/>
          </a>
          <a href='https://github.com/Linolonil?tab=repositories' className={styles.icone} target="_blank" rel='noopener noreferrer'>
          <BsGithub />
          </a>
          <a href='https://www.linkedin.com/in/lino-bittencourt/' className={styles.icone} target="_blank" rel='noopener noreferrer'>
          <BsLinkedin />
          </a>
        </div>
      </section>
   </>
    )
}

export default Contatos