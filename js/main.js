const texto = document.getElementById('texto');
const letras = texto.textContent.split('');

texto.textContent = '';

letras.forEach(letra => {
  const span = document.createElement('span');
  span.textContent = letra;
  span.classList.add('letra-hover');
  texto.appendChild(span);
});

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})