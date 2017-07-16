(function () {
    var todayDate = (new Date().getTime()) / 1000;
    var expireTime = todayDate - localStorage.getItem('data ciasteczka');
    // console.log('data ciasteczka ', localStorage.getItem('data ciasteczka'));
    // console.log('data dzisiejsza ', todayDate);
    // console.log('mineło ', expireTime);
    var $cookiesWrapper = $('div#div-cookies');
    var $cookiesLink = $('a#cookies-link');

    if (expireTime > 10000000000000000) {
        $cookiesWrapper.show();
        localStorage.setItem('ciastko', 'puste');
        // console.log(localStorage);
    }

    $cookiesLink.click(function () {
        var cookiesDate = (new Date().getTime()) / 1000;
        $cookiesWrapper.hide();
        localStorage.setItem('ciastko', 'zapamietane');
        localStorage.setItem('data ciasteczka', cookiesDate);
    })
})();
