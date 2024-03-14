
import styles from './Page404.module.css'

function Page404(){
  return(
    <>
     
        <div className={styles.textos}>
          <span className={styles.texto_grande}>404</span><br/>
          <strong className={styles.texto_vermelho}>Página não localizada!</strong>
        </div>

    
    </>
  )
}

export default Page404;