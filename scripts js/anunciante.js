document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-anuncio');
    const mensagemSucesso = document.getElementById('mensagem-sucesso');


    

    if (!form || !mensagemSucesso) return;

  
    mensagemSucesso.style.display = 'none';

    
    form.addEventListener('submit', function (e) {
        e.preventDefault(); 
        
        mensagemSucesso.style.display = 'block';

        form.reset();

        setTimeout(() => {
            mensagemSucesso.style.display = 'none';
        }, 3000);
    });
});
