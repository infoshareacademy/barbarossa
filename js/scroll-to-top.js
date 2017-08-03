(function () {
    var $arrowToTop = $('#scroll-to-top');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $arrowToTop.fadeIn('slow');
        } else {
            $arrowToTop.fadeOut('slow');
        }
    });

    $arrowToTop.click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
})();
