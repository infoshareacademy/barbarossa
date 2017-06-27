(function()  {
    var switchButton = $('a.nav-menu__item--lang');
    var polandFlag = '<img src="pictures/langPoland.png">';
    var englandFlag = '<img src="pictures/langEngland.png">';

    var $linksToTranslate = $('[data-lang]');
    var inputButtonToTranslate = $('form.premiere input[type=submit]');
    var oldLinksValue;

    switchButton.click( function () {
        var previousFlag = switchButton.html();

        if (previousFlag === polandFlag) {
            $linksToTranslate.each(function () {
                oldLinksValue = $(this).html();
                $(this).html($(this).attr('data-lang'));
                $(this).attr('data-lang', oldLinksValue);
                inputButtonToTranslate.val('Zapisz się teraz!'); // text of button in value
            });
            switchButton.html(englandFlag);
        }
        else {
            $linksToTranslate.each(function () {
                oldLinksValue = $(this).html();
                $(this).html($(this).attr('data-lang'));
                $(this).attr('data-lang', oldLinksValue);
                inputButtonToTranslate.val('Sign up now!'); // text of button in value
            });
            switchButton.html(polandFlag);
        }
    })
}) ();
