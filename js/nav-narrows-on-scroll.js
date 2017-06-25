$(window).scroll(function() {
    if ( lastKnownPositionOfScroll !== $(window).scrollTop()) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    var lastKnownPositionOfScroll = $(window).scrollTop();
});