(function () {

    var $navMenuItems = $('.nav-menu__list li a');

    function changeActiveState() {
        var scrollPosition = $(document).scrollTop();

        $navMenuItems.each(function () {
            var currentLink = $(this);
            var refOfCurrentLink = $(currentLink.attr("href"));

            if (scrollPosition === $(document).height() - $(window).height()) { // when page ends active last link
                $navMenuItems.removeClass("nav-menu__item--active");
                $("a[href='#team']").addClass("nav-menu__item--active");
            }

            else if (refOfCurrentLink.length) {
                if ((refOfCurrentLink.offset().top <= scrollPosition) && (refOfCurrentLink.offset().top + refOfCurrentLink.height() > scrollPosition)) {
                    $navMenuItems.removeClass("nav-menu__item--active");
                    currentLink.addClass("nav-menu__item--active");
                }
                else {
                    currentLink.removeClass("nav-menu__item--active");
                }
            }
        });
    }

    $(document).on("scroll", changeActiveState);
})();