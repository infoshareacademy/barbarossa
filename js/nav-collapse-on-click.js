(function () {
    var $navMenuItems = $('.nav-menu__list  a');

    $(window).resize(function () {
        var mq = window.matchMedia("(max-width: 767px)");
        if (mq.matches) {
            $navMenuItems.attr("data-toggle", "collapse").attr("data-target", "#navbar-collapse");
        }
        else {
            $navMenuItems.removeAttr("data-toggle").removeAttr("data-toggle");
        }
    });
})();