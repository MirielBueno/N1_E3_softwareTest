// testes 1 - funcap calcularSubotal()
const{calcularSubtotal, aplicarCupom, calcularTotal} = require('../src/carrinho')

// teste 1.1 - array item vazia, deve retornar total 0
describe('calcularSubtotal', () => {
    test('retorna 0 quando o carrinho está vazio', () =>{
        const itens = [];

        const subtotal = calcularSubtotal(itens);
    
    expect(subtotal).toBe(0);
    });

    // teste 1.2 - produto 50 qtd 2 deve retornar total 100
    test('retorna 100 para um produto de 50 e qtd 2', () =>{
        const itens = [{preco: 50, quantidade: 2}];
        
        const subtotal = calcularSubtotal(itens)

        expect(subtotal).toBe(100);
    });
    
    // teste 1.3 - teste de vários produtos 
    test('calcula certo o subtotal de varios produtos', ()=>{
        const itens = [
            {preco: 20, quantidade: 2},
            {preco: 15, quantidade: 3},
            {preco: 10, quantidade: 1}
        ];

    const subtotal = calcularSubtotal(itens);

    expect(subtotal).toBe(95)

    });
    // teste 1.4 - preço negativo gera erro
    test('preco negativo deve gerar erro', ()=>{
        const itens = [{preco: -10, quantidade: 1}];

        expect(() => calcularSubtotal(itens)).toThrow('item inválido');
    });

    // teste 1.5 - qtd negativa gera erro
    test('quantidade negativa deve gerar erro', ()=>{
        const itens = [{preco: 10, quantidade: -1}];

        expect(() => calcularSubtotal(itens)).toThrow('item inválido');
    });
});

//testes 2 - funcao aplicarCupom()

describe('aplicarCupom', () =>{
    //teste 2.1 - ALUNO10 aplica 10% de desconto
    test('cupom ALUNO10 aplica 10% off', ()=>{
        const totalComDesconto = aplicarCupom(100, 'ALUNO10');

        expect(totalComDesconto).toBe(90);
    });

    //teste 2.2 - VIP20 aplica 20% de desconto
    test('cupom VIP20 aplica 20% off', ()=>{
        const totalComDesconto = aplicarCupom(50, 'VIP20');

        expect(totalComDesconto).toBe(40);
    });

    //teste 2.3 - cupom desconhecido mantem valor original
    test('cupom desconhecido mantem total sem desconto', ()=>{
        const totalComDesconto = aplicarCupom(50, 'FAKECUPOM');

        expect(totalComDesconto).toBe(50);
    });
});

//teste 3.1 - calcular corretamento total + desconto na funcao calcularTotal
describe('calcularTotal', () =>{
    test('calcula corretamente o total com desconto', ()=>{
        const itens = [{preco: 50  , quantidade: 2}];

        const cupom = 'ALUNO10'

        const total = calcularTotal(itens, cupom)

        expect(total).toBe(90);
    });
});