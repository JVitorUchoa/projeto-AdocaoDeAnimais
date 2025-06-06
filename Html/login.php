<?php
// Inclua o arquivo de conexão com o banco de dados
include('../backend/conexao.php');

// Verificar se o formulário foi enviado
if (isset($_POST['email']) && isset($_POST['senha'])) {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Consultar o banco de dados para verificar o usuário
    $query = "SELECT * FROM usuarios WHERE email = ? LIMIT 1";
    $stmt = $conexao->prepare($query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $usuario = $result->fetch_assoc();

        // Verificar se a senha está correta
        if (password_verify($senha, $usuario['senha'])) {
            // Sucesso no login
            session_start();
            $_SESSION['usuario_id'] = $usuario['id'];
            $_SESSION['usuario_nome'] = $usuario['nome'];
            header("Location: index.php"); // Redirecionar para a página inicial
        } else {
            $erro = "Senha incorreta!";
        }
    } else {
        $erro = "Usuário não encontrado!";
    }
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../css/login.css">
    <link rel="shortcut icon" href="logo.png" type="image/x-icon">

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Luckiest+Guy&family=Passion+One:wght@400;700;900&family=Sevillana&family=Sriracha&family=Titan+One&display=swap');
    </style>
</head>
<body>
    <header>
        <h1>MIAUDOTA</h1>
        <p>Você é a esperança que eles estavam esperando.</p>
    </header>
    <main>
     <div id="area-cachorros" class="area-cachorros"> 
         <img src="../img/caixavaziasemfundo.png" alt="Caixa vazia" 
class="imagem-base"/> 
        </div> 

        <div class="opcoes">
            <input type="radio" id="login" name="toggle" checked onclick="mostrarLogin()">
            <label for="login">Login</label>
    
            <input type="radio" id="cadastro" name="toggle" onclick="mostrarCadastro()">
            <label for="cadastro">Cadastro</label>
        </div>

        <div id="caixa-login" class="caixa-form">
            <input type="email" name="email" placeholder="E-mail" required>
            <input type="password" name="senha" placeholder="Senha" required>
            <button type="submit" class="entrar-btn">Entrar</button>
        </div>

        <div id="caixa-cadastro" class="caixa-form">
            <input type="text" id="nome" placeholder="Nome completo" required>
            <input type="email" id="email" placeholder="E-mail" required>
            <input type="password" id="senha" placeholder="Senha" required>
            <input type="text" id="cpf" placeholder="CPF (Somente números)" maxlength="11" required>
            <p id="resultado"></p>
            <button onclick="validar()" class="cadastrar-btn">Cadastrar</button>
        </div>
    </main>
    <script src="../scripts js/utils_login.js"></script>
</body>
</html>


