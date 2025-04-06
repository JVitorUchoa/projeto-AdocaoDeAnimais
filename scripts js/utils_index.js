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

// Função para verificar a posição do titulo
function verificarPosicaoTitulo() {
    
    // Verifica se o scroll chegou no fim da pagina e quando chegar faz o fade-in e quando sair fade-out
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        titulo.classList.add('visivel');
    } else {
        titulo.classList.remove('visivel');
    }
}

// Verifica a rolagem da pagina
window.addEventListener('scroll', verificarPosicaoTitulo);

// Verifica a posição da tela quando inicia a pagina
verificarPosicaoTitulo();
