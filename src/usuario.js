function criarUsuario(nome, email, perfil = 'CLIENTE') {
  if (!nome || !email) {
    throw new Error('dados obrigatórios');
  }

  return {
    nome,
    email,
    perfil,
    ativo: true
  };
}

function podeComprar(usuario) {
  return Boolean(usuario && usuario.ativo);
}

function desativarUsuario(usuario) {
  return {
    ...usuario,
    ativo: false
  };
}

module.exports = {
  criarUsuario,
  podeComprar,
  desativarUsuario
};
