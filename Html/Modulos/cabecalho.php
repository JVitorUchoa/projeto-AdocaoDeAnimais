<link rel="stylesheet" href="../css/cabeçalho.css">
 <style>
        @import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Luckiest+Guy&family=Passion+One:wght@400;700;900&family=Sevillana&family=Sriracha&family=Titan+One&display=swap');
</style>


<header>
    <div id="caixa">
        <a id="titulo" href="index.php">MIAUDOTA</a>

        <form id="caixa-pesquisa" action="resultados.php" method="get">
            <input type="search" id="pesquisa" name="busca" placeholder="Encontre um PET para amar">
            <button type="submit" class="botao-lupa">
                <img id="lupa" src="../img/lupa.png" alt="lupa de pesquisa">
            </button>
        </form>

        <div id="imagens-simbolos">
            <a href="login.php"><img src="../img/icones/usuario.png" alt="Ícone de login" id="icone-login"></a>
            <a href="#"><img src="../img/icones/interrogação.png" alt="Ajuda" class="icones"></a>
            <a href="#"><img src="../img/icones/gostar - Editado.png" alt="Curtidas" class="icones"></a>
        </div>
    </div>
    <nav>
        <ul id="menu">
            <li><a href="index.php">Home</a></li>
            <li class="menu-agrupado">Categorias
                <ul id="submenu">
                    <li><a href="resultados.php?pesquisa=gato">Gatos</a></li>
                    <li><a href="resultados.php?pesquisa=cachorro">Cachorros</a></li>
                    <li><a href="resultados.php?pesquisa=">Todos Animais</a></li>
                </ul>
            </li>
            <li><a href="#">Histórias de Adoção</a></li>
            <li><a href="anunciante.php">Seja Anunciante</a></li>
            <li><a href="#">Processo de Adoção</a></li>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="login.php">Login</a></li>
        </ul>
    </nav>
</header>