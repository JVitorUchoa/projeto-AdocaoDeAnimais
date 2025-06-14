<?php

$host = 'localhost';
$dbname = 'mialdota';
$usuario = 'root';
$senha = '';
$porta = '3306';  

try {
    $conexao = new PDO("mysql:host=$host;dbname=$dbname", "root", ""); 
    $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $conexao;
} catch (PDOException $e) {
    die("Erro na conexão: " . $e->getMessage());
}
?>