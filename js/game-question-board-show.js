$('.premiere').submit(function() {
    event.preventDefault();
    $gameAllBoard.children().removeClass('game-board-hidden');
    $gameAllBoard.children().addClass('game-board-visible');

    $('button.game-exit-button').click(function() {
        event.preventDefault();
        $('.game-begin-board').show();
        $gameSwitch.children().removeClass('game-main-wrapper-visible');
        $gameSwitch.children().addClass('game-main-wrapper-hidden');
    });
});


$('.game-submit').click(function() {
    document.body.style.overflow = 'hidden';
});