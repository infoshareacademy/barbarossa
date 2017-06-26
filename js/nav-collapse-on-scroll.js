(function()  {
    $(window).scroll(function () {
        var $navbar = $(".nav-menu");

        $navbar.addClass("nav-menu--collapse-on-scroll");

        clearTimeout($.data(this, 'scrollTimer'));

        $.data(this, 'scrollTimer', setTimeout(function() {
            $navbar.removeClass("nav-menu--collapse-on-scroll");
        }, 750));
    });
}) ();