import { useEffect, useState } from 'react';
import styles from './Card.module.css'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Icones from './../Icones/index';





// eslint-disable-next-line react/prop-types
function Card({name, description, html_url}){

  const apiGithubLanguage = `${import.meta.env.VITE_API_URL_language}/${name}/languages`;
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  console.log({html_url})
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function fetchLanguages() {
      try {
        const response = await fetch(`${apiGithubLanguage}`, { 
        headers: {
          Authorization: `token ${token}`
        }
      }
          ).then(response => response.json());
        const languages = Object.keys(response);
        setLanguages(languages);
      } catch (error) {
        console.error('Eror fetching languages:', error);
      }
    }

    fetchLanguages();
  }, [name, apiGithubLanguage, token]);

  return(
    <section className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
          <Icones languages={languages}/>
        </div>
        <Link to={html_url} className={styles.card_botao} rel="noopener noreferrer">
          <FaArrowRight/>
        </Link>
      </div>
    </section>
  )
}

export default Card