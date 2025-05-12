// Função para mostrar o login
function mostrarLogin() {
    document.getElementById("caixa-login").style.display = "flex";
    document.getElementById("caixa-cadastro").style.display = "none";
}
// Função para mostrar o cadastro
function mostrarCadastro() {
    document.getElementById("caixa-login").style.display = "none";
    document.getElementById("caixa-cadastro").style.display = "flex";
}

// Quando carregar a pagina deixa o login visivel por padrão
window.onload = mostrarLogin;

// função para verificar nome,email,CPF e senha
function validar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;
    const resultado = document.getElementById('resultado');
    
    // Limpa o conteúdo do parágrafo antes de exibir novos resultados
    resultado.innerHTML = '';
    let cadastroValido = true; // Variável para controle da validação

    // Validação do Nome
    if (nome.trim() == "") {
        resultado.innerHTML += 'Nome inválido: O nome não pode ser vazio ou conter apenas espaços.<br>';
        cadastroValido = false;
    }

    // Validação do E-mail
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(email)) {
        resultado.innerHTML += 'E-mail inválido: O formato do e-mail está incorreto.<br>';
        cadastroValido = false;
    }

    // Validação da Senha
    const regexSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!regexSenha.test(senha)) {
        resultado.innerHTML += 'Senha inválida: A senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial.<br>';
        cadastroValido = false;
    }

    // Validação do CPF
    if (cpf.length != 11 || !/^\d+$/.test(cpf)) {
        resultado.innerHTML += 'CPF inválido: deve conter 11 dígitos numéricos.<br>';
        cadastroValido = false;
    } else {
        // Não deixa botar cpf com números repetidos (Como 111.111.111.11)
        if (/^(\d)\1{10}$/.test(cpf)) {
            resultado.innerHTML += 'CPF inválido: sequência repetida.<br>';
            cadastroValido = false;
        } else {
            // Função para calcular o dígito verificador
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

            if (digito1 != parseInt(cpf.charAt(9)) || digito2 != parseInt(cpf.charAt(10))) {
                resultado.innerHTML += 'CPF inválido!<br>';
                cadastroValido = false;
            }
        }
    }

    // Se houver algum erro, exibe os erros
    if (!cadastroValido) {
        resultado.className = 'invalid';
    }
}