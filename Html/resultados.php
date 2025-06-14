<?php include('Modulos/cabecalho.php'); ?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Miaudota</title>
    <link rel="stylesheet" href="../css/resultados.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Luckiest+Guy&family=Passion+One:wght@400;700;900&family=Sevillana&family=Sriracha&family=Titan+One&display=swap');
    </style>
</head>
<body>
    <main>
        <h1>Animais encontrados</h1>

        <!-- Grade de cards-->
        <div class="grade-cards">
            <div class="produto-card" onclick="abrirDetalhes(0)">
                <img src="../img/card-animais/gatin1.jpg" alt="Gatinho">
                <p class="nome">Gatinho fofo</p>
            </div>

            <div class="produto-card" onclick="abrirDetalhes(1)">
                <img src="../img/card-animais/dog-feliz.jpg" alt="Cachorro 2">
                <p class="nome">Doguinho</p>
            </div>

            <div class="produto-card" onclick="abrirDetalhes(2)">
                <img src="../img/card-animais/dogin.jpg" alt="Gato 3">
                <p class="nome">Cachorrinho perdido</p>
            </div>
        </div>

        <!-- Detalhes do animal ao Clicar -->
        <section class="card-animais" id="detalhes-animal">
            <img id="img-detalhe" src="" alt="Animal">

            <button type="button" id="botao-fechar" onclick="fecharDetalhes()">
                <img src="../img/botão.png" alt="Fechar">
            </button>

            <div class="info-animal">
                <h2 class="nome-animal" id="nome-detalhe"></h2>
                <p class="tipo-animal" id="tipo-detalhe"></p>
                <p class="descricao" id="desc-detalhe"></p>
                <div id="btn-adotar">Adotar</div>
            </div>
        </section>
    </main>

    <footer>
        <?php include("Modulos/rodape.php"); ?>
    </footer>

    <script src="../scripts js/utils_resultados.js"></script>
</body>
</html>
