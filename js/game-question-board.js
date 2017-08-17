var playerName;

(function () {

    var $gameAllBoard = $('.game-all-boards');

    $('.game-button--exit').click(function () {
        $gameAllBoard.children().removeClass('game-board-visible');
        $gameAllBoard.children().addClass('game-board-hidden');
        document.body.style.overflow = 'visible';
        $(".modal-backdrop.in").hide();
    });

    $('.premiere').submit(function (event) {
        event.preventDefault();
        $gameAllBoard.children().removeClass('game-board-hidden');
        $gameAllBoard.children().addClass('game-board-visible');
        document.body.style.overflow = 'hidden';

        playerName = $('input[name=secondName]').val();
    });
})();