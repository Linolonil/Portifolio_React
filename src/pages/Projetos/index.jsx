import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Projetos.module.css'

function Projetos(){''
  const [repositories, setRepositories] = useState([]);
  
  useEffect(() => {
  const buscarRepositorios = async () => {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const repoGithub = import.meta.env.VITE_API_URL

    const response = await fetch(`${repoGithub}`, {
      headers: {
        Authorization: `token ${token}`
      }
    });

    const data = await response.json();
    setRepositories(data);
  }

  buscarRepositorios();
}, []);

  


  return(
   <section className={styles.projetos}>
      <h2>Projetos</h2>
      {
        repositories.length > 0 ? (
          <section className={styles.lista}>
            {
              repositories.map((repo)=>{

              return <Card 
                key={repo.id} 
                name={repo.name} 
                description={repo.description} 
                />
              }
              )

            }
          </section>
        ) : (
          <p>Carregando Repositórios...</p>
        )
      }
    </section>
  )
}

export default Projetos