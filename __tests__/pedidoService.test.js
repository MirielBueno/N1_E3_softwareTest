const { finalizarPedido } = require('../src/pedidoService');

// testes 1 - funcao finalizarPedido
describe('finalizarPedido', () => {

  // teste 1.1 - pedido valido retorna status CONFIRMADO
  test('pedido valido retorna status CONFIRMADO', () => {
    const pedido = { id: 1, total: 100 };
    const enviarConfirmacao = jest.fn();

    const pedidoFinalizado = finalizarPedido(pedido, enviarConfirmacao);

    expect(pedidoFinalizado.status).toBe('CONFIRMADO');
  });

  // teste 1.2 - confirmacao e chamada exatamente uma vez
  test('confirmação é chamada exatamente uma vez', () => {
    const pedido = { id: 1, total: 100 };
    const enviarConfirmacao = jest.fn();

    finalizarPedido(pedido, enviarConfirmacao);

    expect(enviarConfirmacao).toHaveBeenCalledTimes(1);
  });

  // teste 1.3 - confirmacao recebe a mensagem esperada
  test('confirmação recebe a mensagem esperada', () => {
    const pedido = { id: 1, total: 100 };
    const enviarConfirmacao = jest.fn();

    finalizarPedido(pedido, enviarConfirmacao);

    expect(enviarConfirmacao).toHaveBeenCalledWith(
      'Pedido 1 confirmado. Total: 100'
    );
  });

  // teste 1.4 - total zero gera erro
  test('total zero gera erro', () => {
    const pedido = { total: 0 };

    expect(() => finalizarPedido(pedido)).toThrow('pedido inválido');
  });

  // teste 1.5 - total negativo gera erro
  test('total negativo gera erro', () => {
    const pedido = { total: -1 };

    expect(() => finalizarPedido(pedido)).toThrow('pedido inválido');
  });

  // teste 1.6 - objeto retornado mantem id e total
  test('objeto retornado mantem id e total', () => {
    const pedido = { id: 7, total: 150 };
    const enviarConfirmacao = jest.fn();

    const pedidoFinalizado = finalizarPedido(pedido, enviarConfirmacao);

    expect(pedidoFinalizado).toMatchObject({
      id: 7,
      total: 150
    });
  });
});
