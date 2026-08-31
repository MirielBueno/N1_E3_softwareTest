const {criarUsuario,  podeComprar,  desativarUsuario} = require('../src/usuario');

// testes 1 - funcao criarUsuario
// teste 1.1 - criar usuario valido
describe('criarUsuario', () =>{
    test('cria um usuario valido', () =>{
        const usuario = criarUsuario('Miriel', 'miriel@gmail.com', 'ADMIN');

        expect(usuario).toEqual({
            nome: 'Miriel',
            email: 'miriel@gmail.com',
            perfil: 'ADMIN',
            ativo: true
        });
    });

    // teste 1.2 - usuario pissui nome, email, perfil e ativo
    test('usuario possui nome, email, perfil e ativo', () =>{
        const usuario = criarUsuario('Lais', 'lais@gmail.com', 'CLIENTE');

        expect(usuario).toHaveProperty('nome');
        expect(usuario).toHaveProperty('email');
        expect(usuario).toHaveProperty('perfil');
        expect(usuario).toHaveProperty('ativo');
    });

    // teste 1.3 - perfil padrão é CLIENTE 
    test('perfil padrao é cliente', () =>{
        const usuario = criarUsuario('Caruso', 'caruso@gmail.com');

        expect(usuario.perfil).toBe('CLIENTE');
    });

    // teste 1.4 - novo usuario começa ativo
    test('usuario novo sempre é ativo', () =>{
        const usuario = criarUsuario('Jão', 'jao@gmail.com');

        expect(usuario.ativo).toBeTruthy();
    });

    // teste 1.5 - usuario sem nome gera ERRO
    test('usuario sem nome deve gerar ERRO',() =>{

        expect(() => criarUsuario('', 'semNome@gmail.com')).toThrow('dados obrigatórios');
    });

    // teste 1.6 - usuario sem e-mail gera ERRO
    test('usuario sem e-mail deve gerar ERRO',() =>{

        expect(() => criarUsuario('Zé', '')).toThrow('dados obrigatórios');
    });
});

// testes 2 - funcao podeComprar
// teste 2.1 - usuario ativo pode comprar
describe('podeComprar', ()=>{

    test('usuario ativo pode comprar', () =>{
        const usuario = criarUsuario('Homer', 'homer@gmail.com');

        const resultado = podeComprar(usuario);

        expect(resultado).toBeTruthy();
    });

    // teste 2.2 - usuario desativado não pode comprar
    test('usuario desativado não pode comprar', () =>{
        const usuario = criarUsuario('Bart', 'bart@gamail.com');
        
        const usuarioDesativado = desativarUsuario(usuario);

        const resultado = podeComprar(usuarioDesativado);

        expect(resultado).toBeFalsy();
    });
});

// teste 3.1 funcao desativarUsuario
describe('desativarUsuario', () =>{
    test('retorna usuario com ativo igual a false', () =>{

    const usuario = criarUsuario('Dagoberto', 'dagoberto@gmail.com');

    const usuarioDesativado = desativarUsuario(usuario);

    expect(usuarioDesativado).toMatchObject({
        ativo: false
        });
    });
});