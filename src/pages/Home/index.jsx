
import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import developerImage from '/developer-red.svg'


function Home(){

  return(
    <section className={styles.home}>
      <div className={styles.apresentacao}>
      <p>
      Olá, sou <br></br>
      <span className={styles.hover_animate}>Lino Jorge</span><br></br>
       Dev Full-Stack
      </p>
        <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
          Saiba mais
        </Link>
      </div>
      <figure>
          <img className={styles.img_home} src={developerImage} alt="Imagem de Home" />
      </figure>
    </section>
  )
}

export default Home