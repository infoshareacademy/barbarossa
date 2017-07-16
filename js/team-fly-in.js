$(document).ready(function test() {

    var heightZajawka = $('#home').height();
    var heightFunction = $('#function').height();
    var heightSign = $('#sign').height();
    var $teamSingle = $('.team-single');

    $(window).scroll(function () {
        if ($(document).scrollTop() > (heightZajawka + heightFunction + heightSign - 100)) {
            $teamSingle.removeClass('animation-hidden').addClass('animation-visible');
        } else{}
    })
    });