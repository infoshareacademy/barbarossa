$(document).ready(function test() {

    var heightZajawka = $('#home').height();
    var heightFunction = $('#function').height();
    var heightSign = $('#sign').height();
    var $teamSingle = $('.team-single');

    $(window).scroll(function () {
        if ($(document).scrollTop() > (heightZajawka + heightFunction + heightSign - 100)) {
            $teamSingle.removeClass('team-fly-out').addClass('team-fly-in');
        } else{}
    })
    });