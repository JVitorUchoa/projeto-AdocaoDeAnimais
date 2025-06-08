<?php

    if (isset($_POST['submit'])) {

        include_once('../backend/conexao.php');

        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $senha = $_POST['senha'];
        $cpf = $_POST['cpf'];
    
        $usuarios = mysqli_query($conexao, "INSERT INTO usuarios(nome_usuario, email_usuario, senha_usuario, cpf_usuario) VALUES ('$nome', '$email', '$senha', '$cpf')");
    }

    ?>