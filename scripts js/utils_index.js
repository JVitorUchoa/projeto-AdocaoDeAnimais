// Função para rolar para baixo até o final da pagina
function rolarParaBaixo() {
    
    // Para controlar o scroll até chegar no final da pagina
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        clearInterval(intervalo);
    } else {
        // Define quantos pixeis vao ser escrolados para baixo
        window.scrollBy(0, 1.5);
    }
}

// Seta o intervalo para o window.scrollBy ser ativado
const intervalo = setInterval(rolarParaBaixo, 8);

const titulo = document.getElementById('titulo');
const caixa1 = document.getElementById("caixa1");
const continuar = document.getElementById('continuar');

// Função para verificar a posição do titulo
function verificarPosicaoTitulo() {
    
    // Verifica se o scroll chegou no fim da pagina e quando chegar faz o fade-in e quando sair fade-out
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        titulo.classList.add('visivel');
        caixa1.classList.add('visivel');
        continuar.classList.add('visivel');
    }

}

// Verifica a rolagem da pagina
window.addEventListener('scroll', verificarPosicaoTitulo);

// Verifica a posição da tela quando inicia a pagina
verificarPosicaoTitulo();
