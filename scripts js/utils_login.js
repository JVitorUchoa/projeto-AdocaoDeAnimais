//funções para alternar entre login e cadastro
function mostrarLogin() {
  document.getElementById("caixa-login").style.display = "flex";//exibe a caixa de login assim que a página carrega 
  document.getElementById("caixa-cadastro").style.display = "none";//faz com que a caixa de cadastro não apareça em primeiro momento  
}

function mostrarCadastro() {
  document.getElementById("caixa-login").style.display = "none";//a caixa de login não aparecerá 
  document.getElementById("caixa-cadastro").style.display = "flex";//mostra a caixa de cadastro  
}

window.onload = mostrarLogin;//garante que o login aparecerá assim que a página carrega  

document.addEventListener('DOMContentLoaded', () => {//adicionando um ouvinte de ação 
  //remove borda vermelha antes de fazer a validação de cadastro
  const camposCadastro = document.querySelectorAll('#caixa-cadastro input[required]');//responsável por selecionar  o campo de cadastro
  camposCadastro.forEach(campo => {
    campo.addEventListener('input', () => campo.classList.remove('erro'));//adiciona um listener para remover a classe erro assim que o usuário tenta corrigir 
  });

  //remove borda vermelha antes de fazer a validação de login
  const camposLogin = document.querySelectorAll('#caixa-login input[required]');//responsável por selecionar o campo de login
  camposLogin.forEach(campo => {
    campo.addEventListener('input', () => campo.classList.remove('erro'));//adiciona um listener para remover a classe erro assim que o usuário tenta corrigir 
  });
});

// função para validar o cadastro
function validarCadastro() {
  const novo_nome = document.getElementById('nome');
  const novo_email = document.getElementById('email');
  const novo_cpf = document.getElementById('cpf');
  const novo_senha = document.getElementById('senha');

  // remove bordas vermelhas anteriores
  [novo_nome, novo_email, novo_cpf, novo_senha].forEach(f => f.classList.remove('erro'));

  let cadastroValido = true;//variável para controlar a validação

  const regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;// permite letras maiúsculas e minúsculas, incluindo caracteres acentuados e espaços. 
  if (!regexNome.test(novo_nome.value.trim())) {// se inválido, adiciona a borda vermelha e marca cadastro como inválido 
    novo_nome.classList.add('erro');
    cadastroValido = false;
  }

  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //regex para seguir formato de emails padrão 
  if (!regexEmail.test(novo_email.value)) {
    novo_email.classList.add('erro');
    cadastroValido = false;
  }

   // regex para validar senha, pelo menos 8 caracteres, 1 letra maiúscula, 1 número e 1 caractere especial 
  const regexSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/; 
  if (!regexSenha.test(novo_senha.value)) {
    novo_senha.classList.add('erro');
    cadastroValido = false;
  }
    //validação de cpf 
  const cpf = novo_cpf.value;
  if (cpf.length !== 11 || !/^\d+$/.test(cpf) || /^(\d)\1{10}$/.test(cpf)) {//CPF deve ter 11 dígitos, todos números, e não pode ser sequência repetida 
    novo_cpf.classList.add('erro');
    cadastroValido = false;
  } else {
    const calcDigito = (cpfStr, fator) => {// função responsávelo por calcular dígito verificador do CPF 
      let total = 0;
      for (let i = 0; i < fator - 1; i++) {
        total += parseInt(cpfStr.charAt(i)) * (fator - i);
      }
      const resto = total % 11;
      return resto < 2 ? 0 : 11 - resto;
    };
       //calcula os dois digitos verificadores
    const d1 = calcDigito(cpf, 10);
    const d2 = calcDigito(cpf, 11);
    if (d1 !== parseInt(cpf.charAt(9)) || d2 !== parseInt(cpf.charAt(10))) {
      novo_cpf.classList.add('erro');
      cadastroValido = false;
    }
  }

  return cadastroValido;// retorna verdadeiro se todos os campos do cadastro forem válidos e falso se for inválido 
}

// função para validar o login
function validarLogin() {
  const emailLogin = document.querySelector('#caixa-login #email-login');
  const senhaLogin = document.querySelector('#caixa-login #senha-login');

  // remove bordas vermelhas anteriores
  [emailLogin, senhaLogin].forEach(f => f.classList.remove('erro'));

  let loginValido = true;//variável para controlar a validação

  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //regex para seguir formato de emails padrão 
  if (!regexEmail.test(emailLogin.value)) {
    emailLogin.classList.add('erro');
    loginValido = false;
  }

  if (senhaLogin.value.trim() === '') {
    senhaLogin.classList.add('erro');
    loginValido = false;
  }

  return loginValido;// retorna verdadeiro se todos os campos do cadastro forem válidos e falso se for inválido 
}

// seleciona a área onde os cachorrinhos vão aparecer, onde fica no canto direito 
const areaCachorros = document.getElementById('area-cachorros'); 
// cria um conjunto para registrar quais campos já foram preenchidos, evita repetição 
const camposPreenchidos = new Set(); 
 
let indiceAtual = 0;// índice para saber qual imagem de cachorrinho será adicionada em seguida 
 
// lista com os caminhos das imagens dos cachorrinhos que aparecerão um a um 
const imagensCachorrinhos = [ 
  "../img/caixa Filhote1semf.png", 
  "../img/caixa Filhote2semf.png", 
  "../img/caixa Filhote3semf.png" 
]; 
 
// função responsável por adicionar um novo cachorrinho à caixa 
function adicionarCachorrinho() { 
  if (indiceAtual >= imagensCachorrinhos.length) return; // verifica se já adicionamos todos os cachorrinhos disponíveis 
 
  const img = document.createElement('img');// 
  img.src = imagensCachorrinhos[indiceAtual];//referece a imagem que deve aparecer 
  img.alt = '';//sem texto alternativo 
  img.classList.add('cachorrinho-animado');//classe que ativa a animação css 
  //adiciona a imagem do cahorrinho dentro da caixa 
  areaCachorros.appendChild(img); 
  //passa para o próximo cachorrinho na próxima chamada 
  indiceAtual++; 
} 
 
// monitora os campos e o botão 
function monitorarCampos() { 
  //seleciona todos os campos obrigatórios dos dois formulários (login e cadastro) 
  const campos = document.querySelectorAll('#caixa-login input[required], #caixa-cadastro input[required]'); 
  const botaoEntrar = document.querySelector('.entrar-btn');//inclui o botão Entrar do login 
 
// para cada campo, adiciona um listener para detectar o preenchimento
campos.forEach(campo => {
  campo.addEventListener('input', () => {
    const valor = campo.value.trim();
    if (valor !== '' && !camposPreenchidos.has(campo)) {
      camposPreenchidos.add(campo);
      adicionarCachorrinho();
    }
  });
});

 
  //quando clicar no botão Entrar adiciona mais um animal que ainda não apareceu 
  botaoEntrar.addEventListener('click', () => { 
    if (!camposPreenchidos.has(botaoEntrar)) { 
      camposPreenchidos.add(botaoEntrar); 
      adicionarCachorrinho(); // Adiciona mais um animalzinho 
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

