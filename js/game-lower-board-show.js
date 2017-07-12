$('.premiere').submit(function() {
    event.preventDefault();
    $('.game-all-boards').children().removeClass('game-board-hidden');
    $('.game-all-boards').children().addClass('game-board-visible');
});