const {
  buscarPorNome,
  nomesDisponiveis
} = require('../src/catalogo');

const produtos = [
  { nome: 'Teclado', estoque: 10 },
  { nome: 'Mouse', estoque: 0 },
  { nome: 'Monitor', estoque: 5 },
  { nome: 'Mousepad', estoque: 3 }
];

// testes 1 - função buscarPorNome
describe('buscarPorNome', () => {

  // teste 1.1 - buscar mouse encontra mouse e mousepad
  test('buscar mouse encontra mouse e mousepad', () => {
    const resultado = buscarPorNome(produtos, 'mouse');

    expect(resultado).toHaveLength(2);
    expect(resultado).toEqual([
      { nome: 'Mouse', estoque: 0 },
      { nome: 'Mousepad', estoque: 3 }
    ]);
  });

  // teste 1.2 - busca nao diferencia maiusculas e minusculas
  test('busca nao diferencia letras maiusculas e minusculas', () => {
    const resultadoMinusculo = buscarPorNome(produtos, 'mouse');
    const resultadoMaiusculo = buscarPorNome(produtos, 'MOUSE');

    expect(resultadoMaiusculo).toEqual(resultadoMinusculo);
  });

  // teste 1.3 - busca sem resultado retorna array vazio
  test('busca sem resultado retorna array vazio', () => {
    const resultado = buscarPorNome(produtos, 'Cadeira');

    expect(resultado).toEqual([]);
  });

  // teste 1.4 - catalogo invalido gera erro
  test('catalogo invalido gera erro', () => {
    expect(() => buscarPorNome(null, 'mouse'))
      .toThrow('catálogo inválido');
  });
});

// testes 2 - funcao nomesDisponiveis
describe('nomesDisponiveis', () => {

  // teste 2.1 - retorna somente produtos com estoque maior que zero
  test('retorna somente os nomes dos produtos disponiveis', () => {
    const resultado = nomesDisponiveis(produtos);

    expect(resultado).toEqual([
      'Teclado',
      'Monitor',
      'Mousepad'
    ]);
  });

  // teste 2.2 - resultado contem teclado
  test('resultado contem teclado', () => {
    const resultado = nomesDisponiveis(produtos);

    expect(resultado).toContain('Teclado');
  });

  // teste 2.3 - resultado nao contem mouse
  test('resultado nao contem mouse sem estoque', () => {
    const resultado = nomesDisponiveis(produtos);

    expect(resultado).not.toContain('Mouse');
  });
});