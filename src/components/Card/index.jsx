import { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Icones from './../Icones/index';

function Card({ name, description, html_url }) {

  const apiGithubLanguage = `${import.meta.env.VITE_API_URL_language}/${name}/languages`;
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    async function fetchLanguages() {
      try {
        const response = await fetch(apiGithubLanguage, {
          headers: {
            Authorization: `token ${token}`
          }
        }).then(response => response.json());
        const languages = Object.keys(response);
        setLanguages(languages);
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    }

    fetchLanguages();
  }, [name, apiGithubLanguage, token]);

  return (
    <section className="w-[300px] h-[300px] bg-container text-text rounded-lg shadow-default p-5 flex flex-col justify-between transition-all duration-300 ease-in-out outline-4 outline-transparent hover:outline-first hover:shadow-none hover:translate-y-[-10px] hover:outline-offset-[-0.1rem]" style={{backgroundColor: 'var(--container-color)'}}>
      <h3 className="text-[var(--first-color)] font-bold">{name}</h3>
      <p className="text-[var(--text-color)]">{description}</p>
      <div className="w-full flex items-center justify-between border">
        <div className="flex border border-red-600  p-1 text-[var(--first-color)] text-xl">
          <Icones languages={languages}  />
        </div>
        <Link to={html_url} className="bg-white w-10 h-10 rounded-lg bg-primary text-[var(--first-color)] text-xl flex items-center justify-center cursor-pointer transition-all duration-500 ease-in-out hover:bg-red" rel="noopener noreferrer" target='_blank'>
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default Card;
