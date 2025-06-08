<?php
    // Inclua o arquivo de conexão com o banco de dados
    include('../backend/conexao.php');

    // Verificar se o formulário foi enviado
    if (isset($_POST['email']) && isset($_POST['senha'])) {
        $email = $_POST['email'];
        $senha = $_POST['senha'];

        // Consultar o banco de dados para verificar o usuário
        $query = "SELECT * FROM usuarios WHERE email_usuario = ? LIMIT 1";
        $stmt = $conexao->prepare($query);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $usuario = $result->fetch_assoc();

            // Verificar se a senha está correta
            if (password_verify($senha, $usuario['senha_usuario'])) {
                // Sucesso no login
                session_start();
                $_SESSION['id_usuario'] = $usuario['id_usuario'];
                $_SESSION['nome_usuario'] = $usuario['nome_usuario'];
                header("Location: index.php"); // Redirecionar para a página inicial
            } else {
                $erro = "Senha incorreta!";
            }
        } else {
            $erro = "Usuário não encontrado!";
        }
    }

    ?>