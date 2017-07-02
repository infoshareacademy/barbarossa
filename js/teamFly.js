$(document).ready(function test() {

    var heightZajawka = $('#home').height();
    var heightFunction = $('#function').height();
    var heightSign = $('#sign').height();

    $(window).scroll(function () {
        if ($(document).scrollTop() > (heightZajawka + heightFunction + heightSign - 100)) {
        $('.team-single').removeClass('animation-hidden').addClass('animation-visible');
        } else{}
    })
    });