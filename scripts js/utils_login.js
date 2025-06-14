//funções para alternar entre login e cadastro
function mostrarLogin() {
  document.getElementById("caixa-login").style.display = "flex";
  document.getElementById("caixa-cadastro").style.display = "none";
}

function mostrarCadastro() {
  document.getElementById("caixa-login").style.display = "none";
  document.getElementById("caixa-cadastro").style.display = "flex";
}

window.onload = mostrarLogin;

document.addEventListener('DOMContentLoaded', () => {
  const camposCadastro = document.querySelectorAll('#caixa-cadastro input[required]');
  camposCadastro.forEach(campo => {
    campo.addEventListener('input', () => campo.classList.remove('erro'));
  });

  //remove borda vermelha antes de fazer a validação de login
  const camposLogin = document.querySelectorAll('#caixa-login input[required]');
  camposLogin.forEach(campo => {
    campo.addEventListener('input', () => campo.classList.remove('erro'));
  });
});

// função para validar o cadastro
function validarCadastro() {
  const novo_nome = document.getElementById('nome');
  const novo_email = document.getElementById('email');
  const novo_cpf = document.getElementById('cpf');
  const novo_senha = document.getElementById('senha');

  [novo_nome, novo_email, novo_cpf, novo_senha].forEach(f => f.classList.remove('erro'));
  
  //variável para controlar a validação
  let cadastroValido = true;

  // Valida nome
  const regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
  if (!regexNome.test(novo_nome.value.trim())) {
    novo_nome.classList.add('erro');
    cadastroValido = false;
  }

  // Valida email
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexEmail.test(novo_email.value)) {
    novo_email.classList.add('erro');
    cadastroValido = false;
  }

   // Validar senha, pelo menos 1 letra maiuscula
  const regexSenha = /[A-Z]/
  if (!regexSenha.test(novo_senha.value)) {
    novo_senha.classList.add('erro');
    cadastroValido = false;
  }
    //validação de CPF deve ter 11 dígitos, todos números, e não pode ser sequência repetida 
  const cpf = novo_cpf.value;
  if (cpf.length !== 11 || !/^\d+$/.test(cpf) || /^(\d)\1{10}$/.test(cpf)) {
    novo_cpf.classList.add('erro');
    cadastroValido = false;
  } else {
    const calcDigito = (cpfStr, fator) => {
      let total = 0;
      for (let i = 0; i < fator - 1; i++) {
        total += parseInt(cpfStr.charAt(i)) * (fator - i);
      }
      const resto = total % 11;
      return resto < 2 ? 0 : 11 - resto;
    };

    const d1 = calcDigito(cpf, 10);
    const d2 = calcDigito(cpf, 11);
    if (d1 !== parseInt(cpf.charAt(9)) || d2 !== parseInt(cpf.charAt(10))) {
      novo_cpf.classList.add('erro');
      cadastroValido = false;
    }
  }

  // retorna verdadeiro se todos os campos do cadastro forem válidos e falso se for inválido 
  return cadastroValido;
}

// função para validar o login
function validarLogin() {
  const emailLogin = document.querySelector('#caixa-login #email-login');
  const senhaLogin = document.querySelector('#caixa-login #senha-login');

  [emailLogin, senhaLogin].forEach(f => f.classList.remove('erro'));
  
  //variável para controlar a validação
  let loginValido = true;

  // Validação para seguir formato dos emails
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexEmail.test(emailLogin.value)) {
    emailLogin.classList.add('erro');
    loginValido = false;
  }

  if (senhaLogin.value.trim() === '') {
    senhaLogin.classList.add('erro');
    loginValido = false;
  }
  
  // retorna verdadeiro se todos os campos do cadastro forem válidos e falso se for inválido 
  return loginValido;
}

// Codigo para os cachorrinhos e gatinhos aparecerem na caixa na direita
const areaCachorros = document.getElementById('area-cachorros'); 
const camposPreenchidos = new Set(); 
 
let indiceAtual = 0;
 
const imagensCachorrinhos = [ 
  "../img/caixa Filhote1semf.png", 
  "../img/caixa Filhote2semf.png", 
  "../img/caixa Filhote3semf.png" 
]; 
 
// Função para adicionar um novo cachorrinho e gatinho na caixa 
function adicionarCachorrinho() { 
  if (indiceAtual >= imagensCachorrinhos.length) return;
 
  const img = document.createElement('img');
  img.src = imagensCachorrinhos[indiceAtual];
  img.alt = '';
  img.classList.add('cachorrinho-animado');
  areaCachorros.appendChild(img); 
  indiceAtual++; 
} 
 
// Monitora os campos de input e o botão 
function monitorarCampos() { 
  const campos = document.querySelectorAll('#caixa-login input[required], #caixa-cadastro input[required]'); 
  const botaoEntrar = document.querySelector('.entrar-btn');
 
// Para cada campo, adiciona um listener para detectar o preenchimento e adicionar um animal
campos.forEach(campo => {
  campo.addEventListener('input', () => {
    const valor = campo.value.trim();
    if (valor !== '' && !camposPreenchidos.has(campo)) {
      camposPreenchidos.add(campo);
      adicionarCachorrinho();
    }
  });
});

  // Quando clicar no botão Entrar adiciona mais um animal que ainda não apareceu 
  botaoEntrar.addEventListener('click', () => { 
    if (!camposPreenchidos.has(botaoEntrar)) { 
      camposPreenchidos.add(botaoEntrar); 
      adicionarCachorrinho();
    } 
  }); 
}
 
// assim que a página for carregada a função monitorarCampos é ativada 
document.addEventListener('DOMContentLoaded', monitorarCampos);


















function cadastrarUsuario(nome, email, senha, cpf) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verifica se o e-mail já está cadastrado
  const existe = usuarios.some(u => u.email === email);
  if (existe) {
    alert("E-mail já cadastrado!");
    return false; // Retorna false para indicar falha
  }

  // Adiciona o novo usuário
  usuarios.push({ nome, email, senha, cpf });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Cadastro realizado com sucesso!");
  mostrarLogin(); // Alterna para a tela de login
  return true;
}

function enviarCadastro() {
  if (validarCadastro()) { // Só continua se os dados forem válidos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const cpf = document.getElementById("cpf").value;
    
    cadastrarUsuario(nome, email, senha, cpf); // Chama a função que já redireciona
  }
}

function fazerLogin(email, senha) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (usuario) {
    // Remove qualquer usuário logado anterior
    localStorage.removeItem('usuarioLogado');
    
    // Adiciona apenas os dados essenciais
    const usuarioParaArmazenar = {
      nome: usuario.nome,
      email: usuario.email,
      cpf: usuario.cpf
      // Não armazena a senha por segurança
    };
    
    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioParaArmazenar));
    window.location.href = "index.html";
  } else {
    alert("Email ou senha incorretos!");
    // Garante que não há usuário logado em caso de falha
    localStorage.removeItem('usuarioLogado');
  }
}

function enviarLogin() {
  const email = document.getElementById("email-login").value;
  const senha = document.getElementById("senha-login").value;
  
  if (validarLogin()) {
    fazerLogin(email, senha);
  }
}

