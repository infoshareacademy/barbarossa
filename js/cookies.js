
var todayDate = (new Date().getTime())/1000;
var expireTime = todayDate - localStorage.getItem('data ciasteczka');
// console.log('data ciasteczka ', localStorage.getItem('data ciasteczka'));
// console.log('data dzisiejsza ', todayDate);
// console.log('mineło ', expireTime);

if (expireTime > 10) {
    $('div#div-cookies').removeClass('cookies');
    $(localStorage.setItem('ciastko','puste'));
    // console.log(localStorage);
}

    $('a#cookies').click(function () {
        var cookiesDate = (new Date().getTime())/1000;
            $('div#div-cookies').addClass('cookies');
            localStorage.setItem('ciastko', 'zapamietane');
            localStorage.setItem('data ciasteczka', cookiesDate);


    });



    // (function () {
    //     var todayDate = (new Date().getTime()) / 1000;
    //     var expireTime = todayDate - localStorage.getItem('data ciasteczka');
    //     // console.log('data ciasteczka ', localStorage.getItem('data ciasteczka'));
    //     // console.log('data dzisiejsza ', todayDate);
    //     // console.log('mineło ', expireTime);
    //     var $cookiesWrapper = $('div#div-cookies');
    //     var $cookiesLink = $('a#cookies');
    //
    //     if (expireTime > 10) {
    //         $cookiesWrapper.show();
    //         localStorage.setItem('ciastko', 'puste');
    //         // console.log(localStorage);
    //     }
    //
    //     $cookiesLink.click(function () {
    //         var cookiesDate = (new Date().getTime()) / 1000;
    //         $cookiesWrapper.hide();
    //         localStorage.setItem('ciastko', 'zapamietane');
    //         localStorage.setItem('data ciasteczka', cookiesDate);
    //     })
    // })();
