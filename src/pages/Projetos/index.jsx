import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import styles from './Projetos.module.css';

function Projetos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      const repoGithub = import.meta.env.VITE_API_URL;

      const response = await fetch(`${repoGithub}`, {
        headers: {
          Authorization: `token ${token}`
        }
      });

      const data = await response.json();
      setRepositories(data);
    };

    buscarRepositorios();
  }, []);

  const name = repositories.filter(repo => repo.name === "First_Contact");
  const reposComDescricao = repositories.filter(repo => repo.description !== null && repo.description !== "");
  const reposSemDescricao = repositories.filter(repo => repo.description === null || repo.description === "");
console.log(name)

  const reposOrdenados = [...reposComDescricao, ...reposSemDescricao];

  return (
    <section className={styles.projetos}>
      <h2>Projetos no github</h2>
      {reposOrdenados.length > 0 ? (
        <section className={styles.lista}>
          {reposOrdenados.map(repo => (
            <Card 
              key={repo.id} 
              name={repo.name} 
              description={repo.description} 
              html_url={repo.html_url}
            />
          ))}
        </section>
      ) : (
        <p>Carregando Repositórios...</p>
      )}
    </section>
  );
}


export default Projetos