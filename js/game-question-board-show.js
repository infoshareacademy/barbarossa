$('.premiere').submit(function() {
    event.preventDefault();
    $gameAllBoard.children().removeClass('game-board-hidden');
    $gameAllBoard.children().addClass('game-board-visible');
});

$('.game-submit').click(function() {
    document.body.style.overflow = 'hidden';
});