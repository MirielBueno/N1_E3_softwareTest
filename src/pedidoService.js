function finalizarPedido(pedido, enviarConfirmacao) {
  if (!pedido || pedido.total <= 0) {
    throw new Error('pedido inválido');
  }

  const pedidoFinalizado = {
    ...pedido,
    status: 'CONFIRMADO'
  };

  enviarConfirmacao(
    `Pedido ${pedido.id} confirmado. Total: ${pedido.total}`
  );

  return pedidoFinalizado;
}

module.exports = {
  finalizarPedido
};
