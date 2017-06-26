(function()  {
    var $elementsToTranslate = $('[data-lang]');
    var switchButton = $('a.nav-menu__item--lang');
    var polandFlag = '<img src="pictures/langPoland.png">';
    var englandFlag = '<img src="pictures/langEngland.png">';

    switchButton.click( function () {
        var previousFlag = switchButton.html();
        var $previousText = $elementsToTranslate.text();

        if (previousFlag === polandFlag) {
            switchButton.html(englandFlag);
            $elementsToTranslate.text($elementsToTranslate.attr('data-lang'));
        }
        else {
            switchButton.html(polandFlag);
            $elementsToTranslate.text($elementsToTranslate.attr('data-lang'));
        }


    })
}) ();
