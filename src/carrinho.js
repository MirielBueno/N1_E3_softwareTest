function calcularSubtotal(itens) {
  if (!Array.isArray(itens)) {
    throw new Error('itens inválidos');
  }

  return itens.reduce((total, item) => {
    if (item.preco < 0 || item.quantidade < 0) {
      throw new Error('item inválido');
    }

    return total + item.preco * item.quantidade;
  }, 0);
}

function aplicarCupom(total, cupom) {
  if (cupom === 'ALUNO10') {
    return total * 0.90;
  }

  if (cupom === 'VIP20') {
    return total * 0.80;
  }

  return total;
}

function calcularTotal(itens, cupom) {
  const subtotal = calcularSubtotal(itens);
  return aplicarCupom(subtotal, cupom);
}

module.exports = {
  calcularSubtotal,
  aplicarCupom,
  calcularTotal
};
