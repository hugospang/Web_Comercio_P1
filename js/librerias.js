// librerías de JavaScript




// Slider de novedades (Swiper)
// Docs: https://swiperjs.com/swiper-api
const sliderNovedades = new Swiper('.novedades', {
    slidesPerView: 1.2,    // en móvil se ve un libro y asoma el siguiente
    spaceBetween: 16,
    grabCursor: true,

    pagination: {
        el: '.novedades .swiper-pagination',
        clickable: true,
    },

    navigation: {
        prevEl: '#novedades-anterior',
        nextEl: '#novedades-siguiente',
    },

    breakpoints: {
        640: { slidesPerView: 2.2, spaceBetween: 24 },   // tablet
        1024: { slidesPerView: 3.5, spaceBetween: 24 },  // escritorio
    },
});