var IS_FORM_VALID;
(function () {

    var $gameAllBoard = $('.game-all-boards');
    $nameInput = $("input[name=firstName]");
    $secondNameInput = $("input[name=secondName]");
    $emailInput = $("input[type=email]");
    $infoText = $(".info");

    $('.premiere').submit(function (event) {
        event.preventDefault();
        IS_FORM_VALID = true;
        var $nameInputVal = $nameInput.val().trim();
        var $secondNameInputVal = $secondNameInput.val().trim();
        var $emailInputVal = $emailInput.val().trim();

        if (/^[a-zA-Z]+$/.test($nameInputVal) === false || $nameInputVal.length < 2) {
            IS_FORM_VALID = false;
        }

        if (/^[a-zA-Z]+$/.test($secondNameInputVal) === false || $secondNameInputVal.length < 2) {
            IS_FORM_VALID = false;
        }

        if ($emailInputVal.length === 0) {
            IS_FORM_VALID = false;
        }

        if (IS_FORM_VALID) {
            $gameAllBoard.children().removeClass('game-board-hidden');
            $gameAllBoard.children().addClass('game-board-visible');
            playerName = $('input[name=secondName]').val();
            $infoText.html("Twoje dane są bezpieczne.<br>Nie wykorzystamy ich do celów nikczemnych i wyślemy tylko jedną wiadomość.<br>* - pola wymagane")
                .css('color', '#eee');
            $nameInput.val('');
            $secondNameInput.val('');
            $emailInput.val('');
            document.body.style.overflow = 'hidden';
        }
        else {
            $infoText.html("Wszystkie pola muszą być wypełnione!<br>Imię i nazwisko nie mogą zawierać cyfr i znaków specjalnych")
                .css('color', '#222');
        }
    });
})();