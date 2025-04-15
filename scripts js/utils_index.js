// Função para rolar para baixo até o final da página
let intervalo; // Declare a variável intervalo fora da função

function rolarParaBaixo() {
    // Para controlar o scroll até chegar no final da página
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 1) {
        clearInterval(intervalo);
        bloquearTela();
    } else {
        // Define quantos pixels vão ser rolados para baixo
        window.scrollBy(0, 1.5);
    }
}

// Seta o intervalo para o window.scrollBy ser ativado
function iniciarRolagem() {
    intervalo = setInterval(rolarParaBaixo, 8);
}

const titulo = document.getElementById('titulo');
const caixa1 = document.getElementById("caixa1");
const continuar = document.getElementById('continuar');
const bloqueio = document.getElementById("bloqueio"); // Captura o elemento de bloqueio

// Função para verificar a posição do título
function verificarPosicaoTitulo() {
    // Verifica se o scroll chegou no fim da página e, quando chegar, faz o fade-in
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 1) {
        titulo.classList.add('visivel');
        caixa1.classList.add('visivel');
        continuar.classList.add('visivel');
    }
}

function bloquearTela(){
      // Mostra a camada de bloqueio
    if (bloqueio) {
        bloqueio.style.display = "block";
    }
    document.body.style.overflow = "hidden";
}

// Verifica a rolagem da página
window.addEventListener('scroll', verificarPosicaoTitulo);

// Inicia a rolagem quando a página carregar
window.onload = iniciarRolagem;

// Verifica a posição da tela quando inicia a página (redundante com window.onload, mas ok)
verificarPosicaoTitulo();

// Função que permite o botão "continuar"
if (continuar) {
    continuar.addEventListener("click", function() {
        alert("Você clicou no botão continuar!");
        // A linha abaixo foi removida para não desbloquear a tela
        // desbloquearTela();
    });
}

// Recalcula a altura do documento em caso de redimensionamento da tela
window.addEventListener('resize', verificarPosicaoTitulo);



