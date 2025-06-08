<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mialdota";

$conexao = new mysqli($servername, $username, $password, $dbname);

// Verificando a conexão
if ($conexao->connect_errno) {
    echo "Erro de conexão com o banco de dados";
}