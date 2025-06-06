<?php
// Inclua o arquivo de conexão com o banco de dados
include('../backend/conexao.php');

// Verificar se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nome = $_POST['nome_anunciante'];
    $email = $_POST['email_anunciante'];
    $nome_animal = $_POST['nome_animal'];
    $tipo_animal = $_POST['tipo_animal'];
    $descricao = $_POST['descricao'];

    // Inserir os dados no banco de dados
    $query = "INSERT INTO animais (nome, especie, raca, descricao) VALUES (?, ?, ?, ?)";
    $stmt = $conexao->prepare($query);
    $stmt->bind_param("ssss", $nome_animal, $tipo_animal, $nome, $descricao);

    if ($stmt->execute()) {
        $mensagem = "Anúncio enviado com sucesso!";
    } else {
        $mensagem = "Erro ao enviar anúncio!";
    }
}
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
  <header>
    <?php include('Modulos/cabecalho.php'); ?>
  </header>

  <main id="container">
    <h2 id="titulo-form">Seja um Anunciante</h2>

     <div id="mensagem-sucesso" role="alert">
      Dados enviados com sucesso!
    </div>
    
    <form id="form-anuncio" action="#" method="post">
      <div class="campo-form">
        <label for="nome-anunciante">Seu Nome</label>
        <input type="text" id="nome-anunciante" name="nome" required />
      </div>

      <div class="campo-form">
        <label for="email-anunciante">Seu Email</label>
        <input type="email" id="email-anunciante" name="email" required />
      </div>

      <div class="campo-form">
        <label for="nome-animal">Nome do Animal</label>
        <input type="text" id="nome-animal" name="nomeAnimal" required />
      </div>

      <div class="campo-form">
        <label for="tipo-animal">Tipo do Animal</label>
        <select id="tipo-animal" name="tipoAnimal" required>
          <option value="">Selecione</option>
          <option value="gato">Gato</option>
          <option value="cachorro">Cachorro</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      <div class="campo-form">
        <label for="descricao">Descrição</label>
        <textarea id="descricao" name="descricao" rows="4" required></textarea>
      </div>

      <button type="submit" id="botao-enviar">Enviar Anúncio</button>
    </form>
  </main>

  <script src="../scripts js/anunciante.js"></script>
</body>
</html>
