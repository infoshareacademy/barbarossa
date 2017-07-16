$(document).ready(function () {
    var $navMenuItems = $('.nav-menu__list  a');

    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        $navMenuItems.each(function () {
            $(this).removeClass('nav-menu__item--active');
        });

        $(this).addClass('nav-menu__item--active');

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top + 2
            }, 1000);
        }
    });

});

