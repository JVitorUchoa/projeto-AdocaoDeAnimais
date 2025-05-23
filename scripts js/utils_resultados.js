//Puxa o cabeçalho html pro Index
fetch('cabeçalho.html')
.then(res => res.text())
.then(html => {
document.getElementById('cabecalho').innerHTML = html;
});

const iframe = document.getElementById('iframe-header');

iframe.onload = function () {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    iframe.style.height = doc.documentElement.scrollHeight + 'px';
};