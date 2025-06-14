document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o usuário está logado
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    const bloqueioLogin = document.getElementById('bloqueio-login');
    
    if (!usuarioLogado) {
        if (bloqueioLogin) bloqueioLogin.style.display = 'block';

        const form = document.getElementById('form-anuncio');
        if (form) form.style.display = 'none';
        
        const tituloForm = document.getElementById('titulo-form');
        if (tituloForm) tituloForm.style.display = 'none';
        
        return;
    }

  const form = document.getElementById('form-anuncio');
  const inputFotos = document.getElementById('fotos-animal');
  const previewContainer = document.getElementById('preview-imagens');
  const mensagemSucesso = document.getElementById('mensagem-sucesso');

  if (!form || !mensagemSucesso) return;

  mensagemSucesso.style.display = 'none';

  // Função auxiliar para converter imagem
  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve({ name: file.name, data: reader.result });
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    
});
}

  // Para a visualização das imagens
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

  // Envio do formulário
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

    // Exibe feedback e limpa o formulário
    mensagemSucesso.style.display = 'block';
    form.reset();
    previewContainer.innerHTML = '';

    setTimeout(() => {
      window.location.href = 'resul.html';
    }, 2000);
  });
});


function redimensionarPara3x4(file, callback) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Definimos a largura 300px e altura 400px da imagem
      const width = 300;
      const height = 400;
      canvas.width = width;
      canvas.height = height;
      
      // Calcula o redimensionamento mantendo a proporção
      const ratio = Math.max(width / img.width, height / img.height);
      const newWidth = img.width * ratio;
      const newHeight = img.height * ratio;
      
      // Desenha a imagem centralizada e cortada para 3x4
      ctx.drawImage(
        img,
        (width - newWidth) / 2,
        (height - newHeight) / 2,
        newWidth,
        newHeight
      );
      
      callback(canvas.toDataURL('image/jpeg', 0.85));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Modifique o evento de change do input de fotos
inputFotos.addEventListener('change', function() {
  previewContainer.innerHTML = '';
  if (this.files.length > 3) {
    alert('Máximo de 3 imagens permitidas!');
    this.value = '';
    return;
  }

  Array.from(this.files).forEach(file => {
    redimensionarPara3x4(file, function(dataURL) {
      const container = document.createElement('div');
      container.className = 'preview-item';
      container.innerHTML = `<img src="${dataURL}" alt="Preview">`;
      previewContainer.appendChild(container);
    });
  });
});

// Atualiza o salvamento no form submit
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const promises = Array.from(inputFotos.files).map(file => {
    return new Promise(resolve => {
      redimensionarPara3x4(file, function(dataURL) {
        resolve({
          name: file.name,
          data: dataURL
        });
      });
    });
  });

  Promise.all(promises).then(fotosRedimensionadas => {
    const animalData = {
      // ... outros dados ...
      fotos: fotosRedimensionadas,
      data: new Date().toLocaleDateString()
    };

    const anuncios = JSON.parse(localStorage.getItem('anuncios')) || [];
    anuncios.push(animalData);
    localStorage.setItem('anuncios', JSON.stringify(anuncios));
    
    document.getElementById('mensagem-sucesso').style.display = 'block';
    form.reset();
    previewContainer.innerHTML = '';
    
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 2000);
  });
});