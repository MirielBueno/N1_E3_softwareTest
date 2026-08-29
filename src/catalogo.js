function buscarPorNome(produtos, termo) {
  if (!Array.isArray(produtos)) {
    throw new Error('catálogo inválido');
  }

  const busca = termo.toLowerCase();

  return produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca)
  );
}

function nomesDisponiveis(produtos) {
  return produtos
    .filter((produto) => produto.estoque > 0)
    .map((produto) => produto.nome);
}

module.exports = {
  buscarPorNome,
  nomesDisponiveis
};
