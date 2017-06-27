(function()  {
    var $linksToTranslate = $('a[data-lang]');
    var switchButton = $('a.nav-menu__item--lang');
    var polandFlag = '<img src="pictures/langPoland.png">';
    var englandFlag = '<img src="pictures/langEngland.png">';

    var $previousLinksText = $linksToTranslate.text();

    var arrDataLang = [];

    $linksToTranslate.each(function () {
        arrDataLang.push($(this).attr('data-lang'));
    });
    console.log(arrDataLang);

    switchButton.click( function () {
        var previousFlag = switchButton.html();

        if (previousFlag === polandFlag) {
            $linksToTranslate.text($previousLinksText);
            switchButton.html(englandFlag);
        }
        else {
            $linksToTranslate.text(arrDataLang);
            switchButton.html(polandFlag);
        }
    })
}) ();
