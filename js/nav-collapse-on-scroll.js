(function () {
    var $navbar = $(".nav-menu");
    var lastKnownScrollPosition = 0;

    $(window).scroll(function () {
        var scrollPosition = $(this).scrollTop();

        if (scrollPosition > lastKnownScrollPosition) {
            $navbar.addClass("nav-menu--collapse");
        }
        else {
            $navbar.removeClass("nav-menu--collapse");
        }

        lastKnownScrollPosition = scrollPosition;
    });
})();