import Head from 'next/head';

export async function getStaticProps() {
  try {
    const res = await fetch('https://api.github.com/users/delirlo/repos');
    
    // Verifica se a resposta é válida
    if (!res.ok) {
      throw new Error('Falha ao carregar repositórios');
    }

    // Converte para JSON e garante que seja array
    let repos = await res.json();
    repos = Array.isArray(repos) ? repos : [];

    // Ordena os repositórios por data de atualização (mais recente primeiro)
    const sortedRepos = repos.sort((a, b) => 
      new Date(b.updated_at) - new Date(a.updated_at)
    );

    return {
      props: { repos: sortedRepos },
      revalidate: 60 * 60 * 4 // Atualiza a cada 4 horas
    };

  } catch (error) {
    console.error('Erro na API do GitHub:', error);
    return {
      props: { repos: [] }, // Retorna array vazio em caso de erro
    };
  }
}

function GithubPage({ repos }) {
  if (!repos.length) {
    return (
      <div className="error-message">
        <h2>Meus Projetos no GitHub</h2>
        <p>Não foi possível carregar os repositórios no momento. Por favor, tente novamente mais tarde.</p>
      </div>
    );
  }

  return (
    <div className="github-container">
      <Head>
        <title>Meus Projetos no GitHub | Seu Portfólio</title>
      </Head>

      <h1>Meus Repositórios</h1>
      
      <div className="repo-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-card">
            <h3>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h3>
            <p>{repo.description || 'Sem descrição'}</p>
            <div className="repo-stats">
              <span>⭐ {repo.stargazers_count}</span>
              <span>📅 {new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GithubPage;