
const animais = [
            {
                img: '../img/card-animais/gatin1.jpg',
                nome: 'Gatinho fofo',
                tipo: 'Gato - Filhote',
                descricao: 'Esse gatinho é brincalhão, carinhoso e está esperando por um lar!'
            },
            {
                img: '../img/card-animais/dog-feliz.jpg',
                nome: 'Cachorrinho alegre',
                tipo: 'Cachorro - Médio',
                descricao: 'Muito ativo, ótimo com crianças e adora passear.'
            },
            {
                img: '../img/card-animais/dogin.jpg',
                nome: 'Gata tranquila',
                tipo: 'Gata - Adulta',
                descricao: 'Calma, limpa e perfeita para ambientes mais silenciosos.'
            }
        ];

        function abrirDetalhes(index) {
            const animal = animais[index];
            document.getElementById('img-detalhe').src = animal.img;
            document.getElementById('nome-detalhe').textContent = animal.nome;
            document.getElementById('tipo-detalhe').textContent = animal.tipo;
            document.getElementById('desc-detalhe').textContent = animal.descricao;

            document.getElementById('detalhes-animal').style.display = 'flex';
        }

        function fecharDetalhes() {
            document.getElementById('detalhes-animal').style.display = 'none';
        }