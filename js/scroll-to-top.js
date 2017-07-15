$(window).scroll(function(){
    if ($(this).scrollTop() > 1) {
        $('#scrollToTop').fadeIn();
    } else {
        $('#scrollToTop').fadeOut();
    }
});

$('#scrollToTop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

