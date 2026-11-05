// librerías de JavaScript

// Slider de novedades (Swiper)
// Docs: https://swiperjs.com/swiper-api
const sliderNovedades = new Swiper(".novedades", {
  slidesPerView: 1.2, // en móvil se ve un libro y asoma el siguiente
  spaceBetween: 16,
  grabCursor: true,

  pagination: {
    el: ".novedades .swiper-pagination",
    clickable: true,
  },

  navigation: {
    prevEl: "#novedades-anterior",
    nextEl: "#novedades-siguiente",
  },

  breakpoints: {
    640: { slidesPerView: 2.2, spaceBetween: 24 }, // tablet
    1024: { slidesPerView: 3.5, spaceBetween: 24 }, // escritorio
  },
});
// Animaciones al hacer scroll (AOS)
// Docs: https://michalsnik.github.io/aos/
AOS.init({
  duration: 700, // lo que tarda cada animación (ms)
  once: true, // solo se anima la primera vez que aparece
  offset: 80, // empieza un poco antes de llegar al elemento
  // Si el usuario ha pedido "reducir movimiento", no animamos nada
  disable: function () {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  },
});
