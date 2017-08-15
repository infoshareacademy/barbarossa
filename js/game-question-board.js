(function () {

    var $gameAllBoard = $('.game-all-boards');

    $('.game-button--exit').click(function () {
        $gameAllBoard.children().removeClass('game-board-visible');
        $gameAllBoard.children().addClass('game-board-hidden');
        document.body.style.overflow = 'visible';
        $(".modal-backdrop.in").hide();
    });
})();