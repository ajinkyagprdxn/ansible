$(document).ready(function () {
    $('.slider1').slick({
        nextArrow: false,
        prevArrow: false,
        dots: true,
        speed: 800,
        slideToShow: 1,
        autoplay: false,
        customPaging: function (slider, i) {
            return '<span class="fas fa-circle dot"></span>';
        }
    });
});