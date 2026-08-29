function podeReservar(estoqueDisponivel, quantidadeSolicitada) {
  if (estoqueDisponivel < 0 || quantidadeSolicitada < 0) {
    throw new Error('quantidade inválida');
  }

  return quantidadeSolicitada > 0 &&
         quantidadeSolicitada <= estoqueDisponivel;
}

function reservarItem(produto, quantidade) {
  if (!produto) {
    throw new Error('produto inexistente');
  }

  if (!podeReservar(produto.estoque, quantidade)) {
    throw new Error('estoque insuficiente');
  }

  return {
    ...produto,
    estoque: produto.estoque - quantidade
  };
}

module.exports = {
  podeReservar,
  reservarItem
};
