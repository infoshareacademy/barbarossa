(function () {
    $(document).ready(function () {

    function changeActiveState () {
        var scrollPosition = $(document).scrollTop();
        $('.nav-menu__list li a').each(function () {
            var currentLink = $(this);
            var refOfCurrentLink = $(currentLink.attr("href"));

            if (refOfCurrentLink.length) {
                if ((refOfCurrentLink.offset().top <= scrollPosition) && (refOfCurrentLink.offset().top + refOfCurrentLink.height() > scrollPosition)) {
                    $('.nav-menu__list  a').removeClass("nav-menu__item--active");
                    currentLink.addClass("nav-menu__item--active");
                }
                else {
                    currentLink.removeClass("nav-menu__item--active");
                }
            }
        });
    }
        $(document).on("scroll", changeActiveState);

        // Smooth move after click on link

        // $('a[href^="#"]').on('click', function (e) {
        //     e.preventDefault();
        //     $(document).off("scroll");
        //
        //     $('.nav-menu__list  a').each(function () {
        //         $(this).removeClass('nav-menu__item--active');
        //     });
        //     $(this).addClass('nav-menu__item--active');
        //
        //     var target = this.hash;
        //     $target = $(target);
        //     $('html, body').stop().animate({
        //         'scrollTop': $target.offset().top + 1
        //     }, 500, 'swing', function () {
        //         window.location.hash = target;
        //         $(document).on("scroll", changeActiveState);
        //     });
        // });
    });
})();