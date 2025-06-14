<?php
// ** aqui estou usando caminho relativo. Mais seguro para conexao.
$conexao = include(__DIR__ . '/conexao.php');

// Verifica se o formulário foi enviado com e-mail e senha
if (isset($_POST['email']) && isset($_POST['senha'])) {
    $email = trim($_POST['email']);
    $senha = $_POST['senha'];

    try {
        // Consulta segura com parâmetro nomeado
        $query = "SELECT * FROM usuarios WHERE email_usuario = :email";
        $stmt = $conexao->prepare($query);
        $stmt->execute([':email' => $email]); // Forma prática de passar os parâmetros

        // Verifica se encontrou o usuário
        if ($stmt->rowCount() > 0) {
            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

            // Verifica se a senha está correta
            if ($senha === $usuario['senha_usuario']) {
                session_start();
                $_SESSION['nome_usuario'] = $usuario['nome_usuario'];
                header("Location: ../Html/index.php");
                exit();
            } else {
                echo "Senha incorreta!";
            }
        } else {
            echo "Usuário não encontrado!";
        }
    } catch (PDOException $e) {
        echo "Erro ao acessar o banco de dados: " . $e->getMessage();
    }
}
?>