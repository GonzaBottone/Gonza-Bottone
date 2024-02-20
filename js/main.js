const texto = document.getElementById('texto');
const letras = texto.textContent.split('');

texto.textContent = '';

letras.forEach(letra => {
  const span = document.createElement('span');
  span.textContent = letra;
  span.classList.add('letra-hover');
  texto.appendChild(span);
});
