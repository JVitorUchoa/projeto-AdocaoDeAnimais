document.addEventListener('DOMContentLoaded', function() {
    // Verifica se há usuário logado
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    const loginIconLink = document.getElementById('login-icon');
    const loginIconImg = loginIconLink.querySelector('img');
    const perfilSection = document.getElementById('perfil-section');

    if (usuarioLogado) {
        
        // Modifica o comportamento do clique
        loginIconLink.href = "javascript:void(0);";
        loginIconLink.onclick = function(e) {
            e.preventDefault();
            // Preenche os dados do perfil
            document.getElementById('perfil-nome').textContent = usuarioLogado.nome;
            document.getElementById('perfil-email').textContent = usuarioLogado.email;

            //especifico pro CPF
            document.getElementById('perfil-cpf').textContent = mascararCPF(usuarioLogado.cpf);

        function mascararCPF(cpf) {
            if (!cpf || cpf.length !== 11) return cpf; // Fallback se formato for inválido
            return `${cpf.substring(0, 3)}.${'*'.repeat(3)}.${'*'.repeat(3)}-${cpf.substring(9)}`;
    }
            
            // Mostra a seção de perfil
            perfilSection.style.display = 'block';
        };
    }
    // Se não estiver logado, mantém o link original para login.html

    // Configura o botão de logout
    document.getElementById('logout-btn')?.addEventListener('click', function() {
        localStorage.removeItem('usuarioLogado');
        window.location.reload(); // Recarrega a página para atualizar o estado
    });

    // Fecha o perfil ao clicar fora
    document.addEventListener('click', function(e) {
        if (perfilSection.style.display === 'block' && 
            !perfilSection.contains(e.target) && 
            e.target !== loginIconImg && 
            !loginIconLink.contains(e.target)) {
            perfilSection.style.display = 'none';
        }
    });
});

