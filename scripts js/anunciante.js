document.addEventListener('DOMContentLoaded', function() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    const bloqueioLogin = document.getElementById('bloqueio-login');
    const form = document.getElementById('form-anuncio');
    const tituloForm = document.getElementById('titulo-form');

    // 🔥 Verifica se está logado e aplica o bloqueio
    if (!usuarioLogado) {
        if (bloqueioLogin) bloqueioLogin.style.display = 'flex';
        if (form) form.style.display = 'none';
        if (tituloForm) tituloForm.style.display = 'none';
        return; // 🔥 Interrompe aqui se não está logado
    } else {
        if (bloqueioLogin) bloqueioLogin.style.display = 'none';
        if (form) form.style.display = 'block';
        if (tituloForm) tituloForm.style.display = 'block';
    }

    // 🔥 Se está logado, continua...

    // Configura o perfil e logout
    const loginIconLink = document.getElementById('login-icon');
    const loginIconImg = loginIconLink?.querySelector('img');
    const perfilSection = document.getElementById('perfil-section');

    if (loginIconLink) {
        loginIconLink.href = "javascript:void(0);";
        loginIconLink.onclick = function(e) {
            e.preventDefault();
            document.getElementById('perfil-nome').textContent = usuarioLogado.nome;
            document.getElementById('perfil-email').textContent = usuarioLogado.email;
            document.getElementById('perfil-cpf').textContent = mascararCPF(usuarioLogado.cpf);
            perfilSection.style.display = 'block';
        };
    }

    document.getElementById('logout-btn')?.addEventListener('click', function() {
        localStorage.removeItem('usuarioLogado');
        window.location.href = '../Html/index.html';
    });

    document.addEventListener('click', function(e) {
        if (perfilSection && perfilSection.style.display === 'block' && 
            !perfilSection.contains(e.target) && 
            e.target !== loginIconImg && 
            !loginIconLink?.contains(e.target)) {
            perfilSection.style.display = 'none';
        }
    });

    function mascararCPF(cpf) {
        if (!cpf || cpf.length !== 11) return cpf;
        return `${cpf.substring(0, 3)}.${'*'.repeat(3)}.${'*'.repeat(3)}-${cpf.substring(9)}`;
    }

    // 🔥 Gerenciamento dos anúncios
    const inputFotos = document.getElementById('fotos-animal');
    const previewContainer = document.getElementById('preview-imagens');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');

    mensagemSucesso.style.display = 'none';

    function toBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve({ name: file.name, data: reader.result });
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    }

    inputFotos.addEventListener('change', function () {
        previewContainer.innerHTML = '';

        if (this.files.length > 3) {
            alert('Máximo de 3 imagens permitidas!');
            this.value = '';
            return;
        }

        Array.from(this.files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '100px';
                img.style.margin = '5px';
                previewContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        });
    });

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const fotos = await Promise.all(
            Array.from(inputFotos.files).map(file => toBase64(file))
        );

        const animalData = {
            nomeAnunciante: document.getElementById('nome-anunciante').value.trim(),
            email: document.getElementById('email-anunciante').value.trim(),
            nomeAnimal: document.getElementById('nome-animal').value.trim(),
            tipo: document.getElementById('tipo-animal').value,
            descricao: document.getElementById('descricao').value.trim(),
            fotos: fotos,
            data: new Date().toLocaleDateString()
        };

        const anuncios = JSON.parse(localStorage.getItem('anuncios')) || [];
        anuncios.push(animalData);
        localStorage.setItem('anuncios', JSON.stringify(anuncios));

        mensagemSucesso.style.display = 'block';
        form.reset();
        previewContainer.innerHTML = '';

        setTimeout(() => {
            window.location.href = 'resul.html';
        }, 2000);
    });
});