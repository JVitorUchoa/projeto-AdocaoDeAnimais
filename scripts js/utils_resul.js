document.addEventListener('DOMContentLoaded', function() {
    // Verifica se tem algum usuário logado
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    const loginIconLink = document.getElementById('login-icon');
    const loginIconImg = loginIconLink?.querySelector('img');
    const perfilSection = document.getElementById('perfil-section');

    if (usuarioLogado && loginIconLink) {
        loginIconLink.href = "javascript:void(0);";
        loginIconLink.onclick = function(e) {
            e.preventDefault();
            // Preenche os dados do perfil
            document.getElementById('perfil-nome').textContent = usuarioLogado.nome;
            document.getElementById('perfil-email').textContent = usuarioLogado.email;
            document.getElementById('perfil-cpf').textContent = mascararCPF(usuarioLogado.cpf);
            perfilSection.style.display = 'block';
        };

        function mascararCPF(cpf) {
            if (!cpf || cpf.length !== 11) return cpf;
            return `${cpf.substring(0, 3)}.${'*'.repeat(3)}.${'*'.repeat(3)}-${cpf.substring(9)}`;
        }
    }

    // Configura o botão de logout
    document.getElementById('logout-btn')?.addEventListener('click', function() {
        localStorage.removeItem('usuarioLogado');
        window.location.href = '../Html/index.html';
    });

    // Fecha o perfil quando clicar fora
    document.addEventListener('click', function(e) {
        if (perfilSection && perfilSection.style.display === 'block' && 
            !perfilSection.contains(e.target) && 
            e.target !== loginIconImg && 
            !loginIconLink?.contains(e.target)) {
            perfilSection.style.display = 'none';
        }
    });
  const container = document.getElementById('cards-animais');
  const modal = document.getElementById('detalhes-animal');
  const detalhesConteudo = document.getElementById('detalhes-conteudo');
  const anuncios = JSON.parse(localStorage.getItem('anuncios')) || [];

  function formatarTipo(tipo) {
    return tipo
      .split('-')
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join(' ')
      .replace('Caes', 'Cães');
  }

const urlParams = new URLSearchParams(window.location.search);
const categoriaSelecionada = urlParams.get('categoria');
const termoBusca = urlParams.get('busca')?.toLowerCase() || '';



  function renderizarCards() {
  container.innerHTML = '';

  const anunciosFiltrados = anuncios.filter(animal => {
    if (!animal.nomeAnimal || !animal.tipo || !animal.descricao) return false;

    // Filtrar por categoria
    if (categoriaSelecionada && animal.tipo !== categoriaSelecionada) {
      return false;
    }

    // Filtrar por termo de busca
if (termoBusca && termoBusca.trim() !== '') {
  const nome = animal.nomeAnimal.toLowerCase();
  const descricao = animal.descricao.toLowerCase();

  const contemNoNome = nome.includes(termoBusca);
  const contemNaDescricao = descricao.includes(termoBusca);

  if (!contemNoNome && !contemNaDescricao) {
    return false;
  }
}
// Se a busca estiver vazia ou inválida, não faz filtro — mostra todos.

    return true;
  });

  if (anunciosFiltrados.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; font-family: arial;">
        <p style="font-size: 1.2rem;">Nenhum animal encontrado para essa busca.</p>
      </div>
    `;
    return;
  }

  anunciosFiltrados.forEach(animal => {
    const imagemSrc = animal.fotos?.[0]?.data || '../img/placeholder-animal.jpg';

    const card = document.createElement('div');
    card.className = 'card-animal';
    card.innerHTML = `
      <img src="${imagemSrc}" alt="${animal.nomeAnimal}" class="card-imagem">
      <div class="card-corpo">
        <h3 class="card-titulo">${animal.nomeAnimal}</h3>
        <span class="card-tipo">${formatarTipo(animal.tipo)}</span>
        <p class="card-descricao">${animal.descricao.substring(0, 100)}...</p>
      </div>
    `;

    if (animal.adotado) {
      card.style.opacity = '0.5';
      card.style.filter = 'grayscale(100%)';
      card.title = 'Este animal já foi adotado.';
    }

    card.addEventListener('click', () => mostrarDetalhes(animal));

    container.appendChild(card);
  });
}


  function mostrarDetalhes(animal) {
    const galeriaFotos = animal.fotos && Array.isArray(animal.fotos) 
      ? animal.fotos.map(foto => `<img src="${foto.data || '../img/placeholder-animal.jpg'}" alt="${animal.nomeAnimal}">`).join('')
      : `<img src="../img/placeholder-animal.jpg" alt="Sem fotos disponíveis">`;

    detalhesConteudo.innerHTML = `
      <div class="galeria-animal">
        ${galeriaFotos}
      </div>
      <div class="detalhes-info">
        <h2>${animal.nomeAnimal || 'Animal sem nome'}</h2>
        <p><strong>Tipo:</strong> ${animal.tipo ? formatarTipo(animal.tipo) : 'Não especificado'}</p>
        <p><strong>Anunciante:</strong> ${animal.nomeAnunciante || 'Anônimo'}</p>
        <p><strong>Contato:</strong> ${animal.email || 'Não informado'}</p>
        <p><strong>Descrição completa:</strong></p>
        <p>${animal.descricao || 'Nenhuma descrição fornecida.'}</p>
        <p><small>Anúncio publicado em: ${animal.data || 'Data não registrada'}</small></p>
      </div>
    `;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  document.querySelector('.fechar-modal').addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Chama a função
  renderizarCards();
});