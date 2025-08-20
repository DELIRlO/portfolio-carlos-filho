import Head from 'next/head';

export async function getStaticProps() {
  try {
    const res = await fetch('https://api.github.com/users/delirlo/repos');
    
    if (!res.ok) throw new Error('Falha na API');
    
    let repos = await res.json();
    // Garante que é array e ordena
    repos = Array.isArray(repos) ? 
      repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)) : 
      [];

    return { props: { repos }, revalidate: 3600 };

  } catch (error) {
    console.error(error);
    return { props: { repos: [] } }; // Fallback seguro
  }
}

export default function GithubPage({ repos }) {
  return (
    <div className="container">
      <Head>
        <title>Meus Repositórios GitHub</title>
        <meta name="description" content="Meus projetos no GitHub" />
      </Head>

      <h1>Meus Projetos</h1>
      
      {repos.length === 0 ? (
        <div className="alert">
          Não foi possível carregar os repositórios. Tente novamente mais tarde.
        </div>
      ) : (
        <div className="repo-grid">
          {repos.map(repo => (
            <div key={repo.id} className="repo-card">
              <h3>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
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
      )}
    </div>
  );
}