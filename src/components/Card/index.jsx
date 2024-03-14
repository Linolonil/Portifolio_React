import styles from './Card.module.css'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LanguageIcons from '../Icones';
import { useEffect, useState } from 'react';



// eslint-disable-next-line react/prop-types
function Card({name, description, html_url}){

  const [repoLanguages, setRepoLanguage] = useState([])

  useEffect(()=>{
    const fecthRepoLanguages = async ()=>{
      try{
        const response = await fetch(`https://api.github.com/repos/linolonil/${name}/languages`)
        const data = await response.json()
        const languages = Object.keys(data)
        setRepoLanguage(languages)
      } catch(error){
        console.log(`Error fetching repository languages: ${error}`)
      }
    }

    fecthRepoLanguages()
  }, [name])
  

  return(
    <section className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
         <LanguageIcons languages={repoLanguages}/>
        </div>
        <Link to={html_url} className={styles.card_botao}>
          <FaArrowRight/>
        </Link>
      </div>
    </section>
  )
}

export default Card