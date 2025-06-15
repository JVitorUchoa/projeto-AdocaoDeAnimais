<?php
// desta forma eu não mostro o caminho absoluto da conexão
$conexao = include(__DIR__ . '/conexao.php');

if (isset($_POST['nome'], $_POST['email'], $_POST['fotoAnimal'], $_POST['nomeAnimal'], $_POST['tipoAnimal'], $_POST['descricao'])) {
    $nome = trim($_POST['nome']);
    $email = trim($_POST['email']);
    $fotoAnimal = $_POST['fotoAnimal'];
    $nomeAnimal = trim($_POST['nomeAnimal']);
    $tipoAnimal = $_POST['tipoAnimal'];
    $descricao = trim($_POST['descricao']);
    
        try {
        $query = "INSERT INTO animais (nome_anunciante, email_anunciante, foto_animal, nome_animal, tipo_animal, descricao) VALUES (:nome, :email, :fotoAnimal, :nomeAnimal, :tipoAnimal, :descricao)";
        $stmt = $conexao->prepare($query);
        $stmt->execute([
            ':nome' => $nome,
            ':email' => $email,
            ':fotoAnimal' => $fotoAnimal,
            ':nomeAnimal' => $nomeAnimal,
            ':tipoAnimal' => $tipoAnimal,
            ':descricao' => $descricao,
        ]);
    } catch (PDOException $e) {
        echo "Erro ao cadastrar anuncio: " . $e->getMessage();
    }
}

?>

<?php
/* desta forma eu não mostro o caminho absoluto da conexão
$conexao = include(__DIR__ . '/conexao.php');

if (isset($_POST['nome_anun'], $_POST['email_anun'], $_POST['nome_ani'], $_POST['tipo_ani'], $_POST['descricao'])) {

    $nome = trim($_POST['nome_anun']);
    $email_anun = trim($_POST['email_anun']);
    $nome_ani = trim($_POST['nome_ani']);
    $tipo_ani = $_POST['tipo_ani'];
    $descricao = trim($_POST['descricao']);
        try {
        $query = "INSERT INTO animais (nome_anunciante, email_anunciante, nome_animal, tipo_animal, descricao) VALUES (:nome_anun, :email_anun, :nome_ani, :tipo_ani, :descricao)";
        $stmt = $conexao->prepare($query);
        $stmt->execute([
            ':nome_anun' => $nome,
            ':email_anun' => $email_anun,
            ':nome_ani' => $nome_ani,
            ':tipo_ani' => $tipo_ani,
            ':descricao' => $descricao,
        ]);
    } catch (PDOException $e) {
        echo "Erro ao cadastrar anuncio: " . $e->getMessage();
    }
}
*/


?>