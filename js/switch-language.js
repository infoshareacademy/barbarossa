(function()  {
    var switchButton = $('a.nav-menu__item--lang');

    var $elementsToTranslate = $('[data-lang]');
    var inputButtonToTranslate = $('form.premiere input[type=submit]');
    var previousLang;
    var previousInput;

    function switchLanguage() {
        $elementsToTranslate.each(function () {
            previousLang = $(this).html();
            $(this).html($(this).attr('data-lang'));
            $(this).attr('data-lang', previousLang);
        });
        previousInput = inputButtonToTranslate.val();
        inputButtonToTranslate.val(inputButtonToTranslate.attr('data-lang--val'));
        inputButtonToTranslate.attr('data-lang--val', previousInput);
    }

    switchButton.click(switchLanguage);
}) ();
