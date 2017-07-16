(function () {
    var $arrowToTop = $('#scroll-to-top')

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $arrowToTop.fadeIn();
        } else {
            $arrowToTop.fadeOut();
        }
    });

    $arrowToTop.click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
})();
