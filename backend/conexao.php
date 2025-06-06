<?php
$servername = "localhost";  // ou o IP do seu servidor
$username = "root";         // seu nome de usuário
$password = "";             // sua senha (deixe em branco se for o padrão)
$dbname = "mialdota";       // nome do seu banco de dados

// Criando conexão
$conexao = new mysqli($servername, $username, $password, $dbname);

// Verificando a conexão
if ($conexao->connect_error) {
    die("Connection failed: " . $conexao->connect_error);
}
?>