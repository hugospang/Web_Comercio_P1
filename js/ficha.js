/*ficha.js · Librería Pérgamo
   JavaScript de la ficha de un libro: guardar para luego, «Leer más» y AOS*/

// Guardar para luego
// El navegador recuerda si el libro está guardado (localStorage)
const botonGuardar = document.querySelector("#boton-guardar");
const claveGuardado = "guardado-diez-versiones-de-kafka";

function actualizarBotonGuardar(estaGuardado) {
  botonGuardar.setAttribute("aria-pressed", estaGuardado);
  botonGuardar.textContent = estaGuardado
    ? "♥ Guardado"
    : "♡ Guardar para luego";
}

// Al cargar, recuperamos si ya estaba guardado
if (localStorage.getItem(claveGuardado) === "si") {
  actualizarBotonGuardar(true);
}

botonGuardar.addEventListener("click", function () {
  const estaGuardado = botonGuardar.getAttribute("aria-pressed") !== "true";

  actualizarBotonGuardar(estaGuardado);

  if (estaGuardado) {
    localStorage.setItem(claveGuardado, "si");
  } else {
    localStorage.removeItem(claveGuardado);
  }
});

// Leer más / Leer menos en la sinopsis
const botonLeerMas = document.querySelector("#boton-leer-mas");
const sinopsisMas = document.querySelector("#sinopsis-mas");

botonLeerMas.addEventListener("click", function () {
  sinopsisMas.classList.toggle("hidden");

  const estaAbierto = !sinopsisMas.classList.contains("hidden");

  botonLeerMas.setAttribute("aria-expanded", estaAbierto);
  botonLeerMas.textContent = estaAbierto ? "Leer menos" : "Leer más";
});

// Animaciones al hacer scroll (AOS), con la misma configuración que en index.html
AOS.init({
  duration: 700,
  once: true,
  offset: 80,
  disable: function () {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  },
});
