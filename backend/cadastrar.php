<?php
session_start();
// desta forma eu não mostro o caminho absoluto da conexão
$conexao = include(__DIR__ . '/conexao.php');

if (isset($_POST['nome_usuario'], $_POST['email_usuario'], $_POST['senha_usuario'], $_POST['cpf_usuario'])) {
    $nome = trim($_POST['nome_usuario']);
    $email = trim($_POST['email_usuario']);
    $senha = $_POST['senha_usuario'];
    $cpf = $_POST['cpf_usuario'];
    
    try {
        // Verifica se o email já existe
        $queryVerifica = "SELECT COUNT(*) FROM usuarios WHERE email_usuario = :email";
        $stmtVerifica = $conexao->prepare($queryVerifica);
        $stmtVerifica->execute([':email' => $email]);
        $existe = $stmtVerifica->fetchColumn();

        if ($existe) {

            echo "Este email já está cadastrado!";
            exit();
        }

        // Insere um novo usuário
        $query = "INSERT INTO usuarios (nome_usuario, email_usuario, senha_usuario, cpf_usuario) VALUES (:nome, :email, :senha, :cpf)";
        $stmt = $conexao->prepare($query);
        $stmt->execute([
            ':nome' => $nome,
            ':email' => $email,
            ':senha' => $senha,
            ':cpf' => $cpf
        ]);

        // Grava sessão do usuário recém cadastrado
        $_SESSION['nome_usuario'] = $nome;

        header("Location: ../Html/index.php");

        exit();

    } catch (PDOException $e) {
        echo "Erro ao cadastrar usuário: " . $e->getMessage();
    }
}
?>