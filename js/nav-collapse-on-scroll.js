(function () {
    var navbar = $(".nav-menu");

    $(document).scroll(function () {

        navbar.addClass("nav-menu--collapse");

        clearTimeout($.data(this, 'scrollTimer'));

        $.data(this, 'scrollTimer', setTimeout(function () {
            navbar.removeClass("nav-menu--collapse");
        }, 500));
    });
})();