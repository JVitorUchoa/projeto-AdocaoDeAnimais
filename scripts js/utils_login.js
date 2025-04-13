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
