var playerName;

(function () {

    var $gameAllBoard = $('.game-all-boards');

    $('.game-submit').click(function () {
        document.body.style.overflow = 'hidden';
    });

    $('.game-button--exit').click(function () {
        $gameAllBoard.children().removeClass('game-board-visible');
        $gameAllBoard.children().addClass('game-board-hidden');
        document.body.style.overflow = 'visible';
        $(".modal-backdrop.in").animate({
            opacity: 0
        });
    });

    $('.premiere').submit(function () {
        event.preventDefault();
        $gameAllBoard.children().removeClass('game-board-hidden');
        $gameAllBoard.children().addClass('game-board-visible');
        playerName = $('input[name=secondName]').val();

        $('.game-exit-button').on('click', function (e) {
            e.preventDefault();
            $('.game-main').hide();
            $('.arrow-buttons').hide();
            $('.game-begin-board').show();
        });
    });
})();