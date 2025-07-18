import Head from 'next/head';

export default function GithubPage({ repos }) {
  return (
    <div>
      <Head>
        <title>Meus Repositórios no GitHub</title>
      </Head>

      <h1>Meus Projetos no GitHub</h1>
      
      {repos.length === 0 ? (
        <p>Não foi possível carregar os repositórios. 😢</p>
      ) : (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
              <p>⭐ {repo.stargazers_count} stars</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch('https://api.github.com/users/delirlo/repos');
    
    if (!response.ok) throw new Error('Erro na API do GitHub');
    
    const repos = await response.json();
    const reposArray = Array.isArray(repos) ? repos : [];

    // Ordena por data de atualização (mais recente primeiro)
    const sortedRepos = reposArray.sort((a, b) => 
      new Date(b.updated_at) - new Date(a.updated_at)
    );

    return { 
      props: { 
        repos: sortedRepos 
      },
      revalidate: 60 * 60, // Atualiza a cada 1 hora
    };
  } catch (error) {
    console.error("Erro:", error);
    return { 
      props: { 
        repos: [] 
      } 
    };
  }
}