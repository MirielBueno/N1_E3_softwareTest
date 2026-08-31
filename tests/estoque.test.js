const {podeReservar, reservarItem} = require('../src/estoque.js');

// testes 1 - funcao podeReservar 
// teste 1.1 - permite reserva quando existe estoque suficiente
describe('podeReservar', () =>{

    test('permite reserva quando existe estoque', () =>{
        const resultado = podeReservar(10, 1);

        expect(resultado).toBeTruthy();
    });

    // teste 1.2 - Impede quantidade maior que o estoque
    test('impede qtd maior que estoque', () =>{
        const resultado = podeReservar(3, 5);

        expect(resultado).toBeFalsy();
    });

    // teste 1.3 - Impede reserva de quantidade zero
    test('impede reserva de qtd zero', () =>{
        const resultado = podeReservar(1, 0);

        expect(resultado).toBeFalsy();
    });

    // teste 1.4 - Quantidade negativa gera erro
    test('quantidade negativa gera erro', () =>{

        expect(() => podeReservar(1, -1)).toThrow('quantidade inválida');
    });

    // teste 1.5 - Estoque negativo gera erro
    test('estoque negativa gera erro', () =>{

        expect(() => podeReservar(-1, 1)).toThrow('quantidade inválida');
    });
});





// testes 2 - funcao reservarItem
describe('reservarItem', () =>{

    // testes 2.1 - Reservar 2 unidades de estoque 10 resulta em estoque 8
    test('reservar 2 itens com estoque 10, resulta em estoque 8',() =>{
        const produto = {estoque: 10};

        const produtoReservado = reservarItem(produto, 2);

        expect(produtoReservado.estoque).toBe(8);
    });

    // testes 2.2 - A reserva não altera o objeto original
    test('a reserva não altera o objeto original', () =>{
        const produto = {estoque: 10};

        const produtoReservado = reservarItem(produto, 2);

        expect(produto.estoque).toBe(10);
        expect(produtoReservado).not.toBe(produto);
    });

    // testes 2.3 - Produto inexistente gera erro
    test('produto inexistente gera erro', () =>{       
        expect(() => reservarItem(null)).toThrow('produto inexistente');
    });

    // testes 2.4 - Estoque insuficiente gera erro
        test('estoque insuficiente gera erro', () =>{  
            const produto = {estoque: 2}
            
        expect(() => reservarItem(produto, 3)).toThrow('estoque insuficiente');
    });

});




