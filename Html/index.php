<?php include('Modulos/cabecalho.php'); ?>


<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Miaudota</title>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Luckiest+Guy&family=Passion+One:wght@400;700;900&family=Sevillana&family=Sriracha&family=Titan+One&display=swap');
    </style>
    <link rel="stylesheet" href="../css/home.css">
</head>

<body>
    <main>
        <section id="banner">
            <div class="container">
                <div class="texto-adocao">
                    <h2>Adote um amigo hoje!</h2>
                    <p>
                        Dê um lar cheio de amor a quem precisa. Milhares de animais esperam por um lar cheio de carinho.
                        Ao adotar, você não apenas ganha um amigo leal mas também transforma uma vida. Adotar é um
                        ato de amor!
                    </p>
                    <button onclick="window.location.href='#grade'">Ver Animais Disponíveis</button>
                </div>
                <img class="imagem-home" src="../img/miaudota.JPG" alt="Cachorro caramelo e gato cinza">
            </div>
        </section>

        <section class="transicao-degrade"></section>

        <section id="grade">
            <div id="grade-caes">
                <a class="imagens-grade" id="img-borda-left" href="#"><img src="../img/categorias/raça-pequena.jpg" alt="Cães de raças pequenas"><br>Raças pequenas</a>
                <a class="imagens-grade" href="#"><img src="../img/categorias/raça-media.jpg" alt="Cães de raças médias"><br>Raças médias</a>
                <a class="imagens-grade" href="#"><img src="../img/categorias/raça-grande.jpg" alt="Cães de raças grandes"><br>Raças grandes</a>
                <a class="imagens-grade" href="#"><img src="../img/categorias/cão-filhote.jpg" alt="Cães filhotes"><br>Cães filhotes</a>
                <a class="imagens-grade" href="#"><img src="../img/categorias/cao-adulto.jpg" alt="Cães adultos"><br>Cães adultos</a>
                <a class="imagens-grade" id="img-borda-right" href="#"><img src="../img/categorias/cão-idoso.jpg" alt="Cães idosos"><br>Cães idosos</a>
            </div>

            <div id="grade-gatos">
                <a class="imagens-grade" href="#"><img src="../img/categorias/gato-raça.jpeg" alt="Gatos de raça"><br>Gatos de raça</a>
                <a class="imagens-grade" href="#"><img src="../img/categorias/gato mestiço.jpg" alt="Gatos mestiços"><br>Gatos mestiços</a>
                <a class="imagens-grade" href="#"><img src="../img/categorias/gato-filhote.jpg" alt="Gatos filhotes"><br>Gatos filhotes</a>
                <a class="imagens-grade gatos-adultos" href="#"><img src="../img/categorias/gato-adulto.png" alt="Gatos adultos"><br>Gatos adultos</a> <!--criado uma classe para gatos adultos, em razão do espaçamento no css -->
                <a class="imagens-grade gatos-idosos" href="#"><img src="../img/categorias/gato-idoso.jpg" alt="Gatos idosos"><br>Gatos idosos</a> <!--criado uma classe para gatos idosos, em razão do espaçamento no css -->
                </div>
            </section>
            </main>
            
            
            
    <footer>
        <?php include("Modulos/rodape.php"); ?>
    </footer>

</body>

</html>
