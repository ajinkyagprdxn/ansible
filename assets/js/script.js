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

    var disp = document.getElementById("openMod");
    var bigdisp = $("#modDisplay");

    var bodyh = $("body");

    $("#closebtn").click(function () {
        closefn();
    });

    var open = $(".opendata");

    for (var i = 0; i < open.length; i++) {
        open[i].addEventListener("click", function (e) {
            disp.classList.replace('modalImage', 'openModal');
            bigdisp.html(this.innerHTML);
            bodyh.addClass("bodytemp");
        });
    }

    bigdisp.click(function (event) {
        event.stopPropagation();
    });

    disp.addEventListener("click", closefn3);
    function closefn3() {
        disp.classList.replace('openModal', 'modalImage');
        bodyh.classList.remove("bodytemp");
    }
});

