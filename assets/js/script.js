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

    var disp = $("#openMod");
    var bigdisp = $("#modDisplay");
    var bodyh = $("body");
    var open = $(".opendata");

    for (var i = 0; i < open.length; i++) {
        open[i].addEventListener("click", function () {
            disp.addClass('openModal').removeClass('modalImage');
            bigdisp.html(this.innerHTML);
            bodyh.addClass("bodytemp");
        });
    }

    bigdisp.parent().click(function () {
        close();
    });

    $("#closebtn").click(function () {
        close();
    });

    function close() {
        disp.addClass('modalImage').removeClass('openModal');
        bodyh.removeClass("bodytemp");
    }

});