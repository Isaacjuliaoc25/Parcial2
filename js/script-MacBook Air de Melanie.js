/* Activador de jQuery */
$(document).ready(function(){
    // Activador de Slick Slider
    $('.slick-banner').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplaySpeed: 2000,
        speed: 700,
        infinite: true,
        arrows: true
    });
});