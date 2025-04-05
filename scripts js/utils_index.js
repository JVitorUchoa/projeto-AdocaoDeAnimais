// Função para rolar para baixo até o final da pagina
function rolarParaBaixo() {
    
    // Para controlar o scroll quando chegar no final da pagina
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
    const titulo = document.getElementById('titulo');
    const rect = titulo.getBoundingClientRect(); // Pega a posição do titulo na tela
    
    // Verifica se o titulo esta aparecendo na tela faz o fade-in quando o titulo entra na tela e fade-out quando sai
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        titulo.classList.add('visivel');
    } else {
        titulo.classList.remove('visivel');
    }
}

// Verifica a rolagem da pagina
window.addEventListener('scroll', verificarPosicaoTitulo);

// Verifica a posição do titulo quando carrega a pagina
verificarPosicaoTitulo();
