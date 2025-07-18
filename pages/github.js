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

    // Ordena os repositórios (se necessário)
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