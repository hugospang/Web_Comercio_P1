/*interfaz.js · Librería Pérgamo
   JavaScript: menú móvil y modo claro/oscuro*/

// Menú móvil
const botonMenu = document.querySelector("#boton-menu");
const menu = document.querySelector("#menu");
const enlacesMenu = document.querySelectorAll("#menu a");

function actualizarBotonMenu(estaAbierto) {
  botonMenu.setAttribute("aria-expanded", estaAbierto);
  botonMenu.textContent = estaAbierto ? "Cerrar" : "Menú";
}

botonMenu.addEventListener("click", function () {
  menu.classList.toggle("hidden");
  actualizarBotonMenu(!menu.classList.contains("hidden"));
});

// Al pulsar un enlace, el menú se cierra
enlacesMenu.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    menu.classList.add("hidden");
    actualizarBotonMenu(false);
  });
});
// Modo claro / oscuro
const botonTema = document.querySelector("#boton-tema");
const raizHtml = document.documentElement;

function actualizarBotonTema(esOscuro) {
  botonTema.textContent = esOscuro ? "Modo claro" : "Modo oscuro";
  botonTema.setAttribute("aria-pressed", esOscuro);
}

// Al cargar, recuperamos la elección guardada
if (localStorage.getItem("tema") === "oscuro") {
  raizHtml.classList.add("dark");
  actualizarBotonTema(true);
}

botonTema.addEventListener("click", function () {
  const esOscuro = raizHtml.classList.toggle("dark");

  actualizarBotonTema(esOscuro);
  localStorage.setItem("tema", esOscuro ? "oscuro" : "claro");
});
