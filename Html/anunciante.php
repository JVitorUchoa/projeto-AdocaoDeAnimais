<?php include('Modulos/cabecalho.php');
  include('../backend/salvar_anuncio.php');
?>



<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Miaudota - Seja um Anunciante</title>
  <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../css/anunciante.css" />
</head>

<body>

  <main id="container">
    <h2 id="titulo-form">Seja um Anunciante</h2>

     <div id="mensagem-sucesso" role="alert">
      Dados enviados com sucesso!
    </div>
    
    <form action="../backend/salvar_anuncio.php" method="post" enctype="multipart/form-data" id="form-anuncio">
      <div class="campo-form">
        <label for="nome_anun">Seu Nome</label>
        <input type="text" id="nome_anun" name="nome" required />
        <label for="email_anun">Seu Email</label>
        <input type="email" id="email_anun" name="email" required />
        <label for="foto_ani">Foto do Animal (URL publico)</label>
        <input type="url" id="foto_ani" name="fotoAnimal" required />
        <label for="nome_ani">Nome do Animal</label>
        <input type="text" id="nome_ani" name="nomeAnimal" required />
        <label for="tipo_ani">Tipo do Animal</label>
        <select id="tipo_ani" name="tipoAnimal" required>
          <option value="">Selecione</option>
          <option value="gato">Gato</option>
          <option value="cachorro">Cachorro</option>
          <option value="outro">Outro</option>
        </select>
        <label for="descricao">Descrição</label>
        <textarea id="descricao" name="descricao" rows="4" required></textarea>
      </div>

      <button type="submit" id="botao-enviar">Enviar Anúncio</button>
    </form>
  </main>

  <script src="../scripts js/anunciante.js"></script>
</body>
</html>
