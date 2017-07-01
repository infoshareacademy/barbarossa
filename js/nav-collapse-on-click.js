(function () {
    $(document).ready(function () {
        $(window).resize(function () {
            var mq = window.matchMedia("(max-width: 767px)");
            var $navMenuItems = $('.nav-menu__list  a');

            if (mq) {
                $navMenuItems.attr("data-toggle", "collapse").attr("data-target", "#navbar-collapse");
            }
            else {
                $navMenuItems.removeAttr("data-toggle").removeAttr("data-toggle");
            }
        });
    });
})();