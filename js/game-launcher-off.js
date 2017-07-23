$('.game-exit-button').click(function() {
    event.preventDefault();
    $gameSwitch.children().removeClass('game-main-wrapper-visible');
    $gameSwitch.children().addClass('game-main-wrapper-hidden');
});