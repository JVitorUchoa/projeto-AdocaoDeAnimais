// Função para mostrar o login
function mostrarLogin() {
    document.getElementById("caixa-login").style.display = "block";
    document.getElementById("caixa-cadastro").style.display = "none";
}
// Função para mostrar o cadastro
function mostrarCadastro() {
    document.getElementById("caixa-login").style.display = "none";
    document.getElementById("caixa-cadastro").style.display = "block";
}


// Quando carregar a pagina deixa o login visivel por padrão
window.onload = mostrarLogin;

// função para verificar nome,email,CPF e senha
function validar() {
      // Limpa a área de mensagens a cada validação
      const resultado = document.getElementById("resultado");
      resultado.innerHTML = "";

      const nome  = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value;
      const cpf   = document.getElementById("cpf").value.trim();
      
      // Variável para checar se todos os campos são válidos
      let cadastroValido = true;
      
      // Validação do Nome
      if (nome.length < 5) {
        resultado.innerHTML += 'O nome deve ter pelo menos 5 caracteres.<br>';
        cadastroValido = false;
      }
      
      // Validação do E-mail
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(email)) {
        resultado.innerHTML += 'E-mail inválido.<br>';
        cadastroValido = false;
      }
      
      // Validação da Senha
      if (senha.length < 6) {
        resultado.innerHTML += 'A senha deve ter pelo menos 6 caracteres.<br>';
        cadastroValido = false;
      }
      
      // Validação do CPF
      if (cpf.length != 11 || !/^\d+$/.test(cpf)) {
          resultado.innerHTML += 'CPF inválido: O CPF precisa de 11 dígitos numéricos.<br>';
          cadastroValido = false;
      } else {
          // Não permite CPF com números repetidos (como 11111111111)
          if (/^(\d)\1{10}$/.test(cpf)) {
              resultado.innerHTML += 'CPF inválido: sequência repetida.<br>';
              cadastroValido = false;
          } else {
              const calcDigito = (cpf, factor) => {
                  let total = 0;
                  for (let i = 0; i < factor - 1; i++) {
                      total += parseInt(cpf.charAt(i)) * (factor - i);
                  }
                  const resto = total % 11;
                  return resto < 2 ? 0 : 11 - resto;
              };

              const digito1 = calcDigito(cpf, 10);
              const digito2 = calcDigito(cpf, 11);

              if (digito1 !== parseInt(cpf.charAt(9)) || digito2 !== parseInt(cpf.charAt(10))) {
                  resultado.innerHTML += 'CPF inválido!<br>';
                  cadastroValido = false;
              }
          }
      }
      
      // Exibe mensagem de sucesso se o cadastro for válido
      if (cadastroValido) {
        resultado.style.color = "green";
        resultado.innerHTML = "Todos os campos estão corretos!";
      } else {
        resultado.style.color = "red";
      }
      
      // Retorna o status do cadastro (true = enviar, false = cancelar o submit)
      return cadastroValido;
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