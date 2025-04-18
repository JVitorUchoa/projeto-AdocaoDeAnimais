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
const subtitulo = document.getElementById('subtitulo'); // Manipulando o subtítulo

// Função para verificar a posição do título
function verificarPosicaoTitulo() {
    // Verifica se o scroll chegou no fim da página e, quando chegar, faz o fade-in
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 1) {
        titulo.classList.add('visivel');
        imagensCaixas[0].classList.add('visivel'); // Exibe a caixa vazia aqui, quando chegar no final do scroll
        continuar.classList.add('visivel');
        subtitulo.classList.add('visivel'); // Garante que o subtítulo apareça ao final do scroll
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

    });
}

// Recalcula a altura do documento em caso de redimensionamento da tela
window.addEventListener('resize', verificarPosicaoTitulo);

//Aparece as animações das caixas e os subtítulos e direciona para o home

const imagensCaixas = [
    document.getElementById('caixa1'),   // Caixa vazia
    document.getElementById('caixa2'),   // Caixa com 1 filhote
    document.getElementById('caixa3'),   // Caixa com 2 filhotes
    document.getElementById('caixa4')    // Caixa com 3 filhotes
];

const textosSubtitulos = [
    "Aqui, histórias começam com um olhar e um clique.",
    "Um gesto simples, um grande impacto.",
    "Cada clique, uma esperança."
];

let passoAtual = 0;

continuar.addEventListener('click', (e) => {
    e.preventDefault();

    if (passoAtual < textosSubtitulos.length) {
        subtitulo.classList.remove('fade-in');//Remove a classe de fade-in para que a transição possa ocorrer novamente.
        // Força um reflow para reiniciar a animação
        void subtitulo.offsetWidth;
        subtitulo.textContent = textosSubtitulos[passoAtual];//A cada clique, atualiza o texto do subtítulo.
        subtitulo.classList.add('fade-in');//Adiciona a classe de fade-in novamente, fazendo com que o novo texto apareça com a animação.

        // Remove .visivel de todas as caixas
        imagensCaixas.forEach((img) => {
            img.classList.remove('visivel');
        });

        // Adiciona .visivel na imagem correspondente ao passo atual
        if (passoAtual + 1 < imagensCaixas.length) {
            imagensCaixas[passoAtual + 1].classList.add('visivel');
        }

        passoAtual++;
    } else {
        window.location.href = 'home.html';
    }
});