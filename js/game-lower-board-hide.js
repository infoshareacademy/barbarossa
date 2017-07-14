$('.game-button--exit').click(function() {
    $('.game-all-boards').children().removeClass('game-board-visible');
    $('.game-all-boards').children().addClass('game-board-hidden');
});