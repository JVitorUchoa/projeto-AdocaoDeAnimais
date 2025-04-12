// Função para rolar para baixo até o final da página
function rolarParaBaixo() {
    // Para controlar o scroll até chegar no final da página
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        clearInterval(intervalo);
        bloquearTela();
    } else {
        // Define quantos pixels vão ser rolados para baixo
        window.scrollBy(0, 1.5);
    }
}

// Seta o intervalo para o window.scrollBy ser ativado
const intervalo = setInterval(rolarParaBaixo, 8);

const titulo = document.getElementById('titulo');
const caixa1 = document.getElementById("caixa1");
const continuar = document.getElementById('continuar');

// Função para verificar a posição do título
function verificarPosicaoTitulo() {
    // Verifica se o scroll chegou no fim da página e, quando chegar, faz o fade-in
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
     
        titulo.classList.add('visivel');
        caixa1.classList.add('visivel');
        continuar.classList.add('visivel');
    }
} 

function bloquearTela(){
      // Mostra a camada de bloqueio
    document.getElementById("bloqueio").style.display = "block";
    document.body.style.overflow = "hidden";
}

// Verifica a rolagem da página
window.addEventListener('scroll', verificarPosicaoTitulo);

// Verifica a posição da tela quando inicia a página
verificarPosicaoTitulo();

// Função que permite o botão "continuar" desbloquear a tela
document.getElementById("continuar").addEventListener("click", function() {
    alert("Você clicou no botão continuar!");
    //document.getElementById("bloqueio").style.display = "none"; //Comando removido
});



