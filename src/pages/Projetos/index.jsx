import { useEffect, useState } from 'react';
import Card from '../../components/Card';

function Projetos() {
  const [repositories, setRepositories] = useState([]);
  console.log(repositories)
  const [error, setError] = useState(null);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      const repoGithub = import.meta.env.VITE_API_URL;
    
      try {
        const response = await fetch(`${repoGithub}`, {
          headers: {
            Authorization: `token ${token}`
          }
        });

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          setRepositories(data);
        } else {
          setError('Dados recebidos não são um array.');
        }
      } catch (error) {
        setError(`Falha ao buscar repositórios: ${error.message}`);
      }
    };

    buscarRepositorios();
  }, []);

  const reposComDescricao = repositories.filter(repo => repo.description !== null && repo.description !== "");
  const reposSemDescricao = repositories.filter(repo => repo.description === null || repo.description === "");

  const reposOrdenados = [...reposComDescricao, ...reposSemDescricao];

  return (
    <section className="p-10">
      <h2 className="text-center text-[var(--text-color)] font-bold text-3xl">Projetos no GitHub</h2>
      {error ? (
        <p className="text-red-500 text-center">Erro: {error}</p>
      ) : reposOrdenados.length > 0 ? (
        <section className="w-full flex flex-row flex-wrap  align-center justify-center gap-6 m-4 border borderred">
          {reposOrdenados.map(repo => (
            <Card 
              key={repo.id} 
              name={repo.name} 
              description={repo.description} 
              html_url={repo.html_url}
              className="flex flex-row justify-center"
            />
          ))}
        </section>
      ) : (
        <p className="text-[var(--text-color)] text-center">Carregando Repositórios...</p>
      )}
    </section>
  );
}

export default Projetos;
