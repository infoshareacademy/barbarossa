var $gameSwitch = $('.game-main-wrapper-switch');

$('.game-button--entry').click(function() {
    event.preventDefault();
    $('.game-begin-board').hide();
    $('.game-main').show();
    $('.arrow-buttons').show();
    $gameSwitch.children().removeClass('game-main-wrapper-hidden');
    $gameSwitch.children().addClass('game-main-wrapper-visible');
});
