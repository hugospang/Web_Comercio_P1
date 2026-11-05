/* =========================================================
   interfaz.js · Librería Pérgamo
   JavaScript nativo: menú móvil y modo claro/oscuro
   ========================================================= */

// Menú móvil
const botonMenu = document.querySelector('#boton-menu');
const menu = document.querySelector('#menu');
const enlacesMenu = document.querySelectorAll('#menu a');

function actualizarBotonMenu(estaAbierto) {
    botonMenu.setAttribute('aria-expanded', estaAbierto);
    botonMenu.textContent = estaAbierto ? 'Cerrar' : 'Menú';
}

botonMenu.addEventListener('click', function () {
    menu.classList.toggle('hidden');
    actualizarBotonMenu(!menu.classList.contains('hidden'));
});

// Al pulsar un enlace, el menú se cierra
enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        menu.classList.add('hidden');
        actualizarBotonMenu(false);
    });
});
