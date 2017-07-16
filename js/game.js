// Moving vehicle

(function () {
    $(document).ready(function () {

        // Board

        var game = $('#game');
        var IS_DRUNK = false;

        function times(n, callback) {
            for (var i = 0; i < n; i += 1) {
                callback(i);
            }
        }

        var gameBoard = $('<table>');
        var size = 10;
        var score = 0;

        times(size, function () {
            var tr = $('<tr>');
            times(size, function () {
                var td = $('<td>');
                tr.append(td)
            });
            gameBoard.append(tr).attr('tabindex', 0)
        });

        game.append(gameBoard);
        gameBoard.focus();


        (function startPositionOfCarAndBuildings() {
            $('tr:nth-child(10) td:nth-child(1)').addClass('car');
            $('tr:nth-child(5) td:nth-child(5)').addClass('building');
            $('tr:nth-child(5) td:nth-child(6)').addClass('building');
        })();

        // Passengers

        (function addPassengers() {
            var counter = 0;
            var interval = setInterval(function () {

                var x = (Math.floor(Math.random() * size - 1) + 1);
                var y = (Math.floor(Math.random() * size - 1) + 1);
                var $nextPositionOfPassenger = $('tr:nth-child(' + x + ') td:nth-child(' + y + '):not(.building):not(.passenger):not(.car):not(.bottle)');

                // if ($nextPositionOfPassenger.hasClass('building') ||
                //     $nextPositionOfPassenger.hasClass('passenger') ||
                //     $nextPositionOfPassenger.hasClass('car') ||
                //     $nextPositionOfPassenger.hasClass('bottle')
                // ) {
                // } // do nothing
                if ($nextPositionOfPassenger.length) {
                    counter++;
                    $nextPositionOfPassenger.addClass('passenger');
                    setTimeout(function clearClass() {
                        $nextPositionOfPassenger.removeClass('passenger');
                    }, 10000);
                    if (counter > 20) {
                        clearInterval(interval)}
                }

            }, 1000)
        })();


        // Bottles

        (function addBottles() {
            var counter = 0;
            var interval = setInterval(function () {
                var x = (Math.floor(Math.random() * size - 1) + 1);
                var y = (Math.floor(Math.random() * size - 1) + 1);
                var $nextPositionOfBottle = $('tr:nth-child(' + x + ') td:nth-child(' + y + '):not(.building):not(.passenger):not(.car):not(.bottle)');

                // if ($nextPositionOfBottle.hasClass('building') ||
                //     $nextPositionOfBottle.hasClass('passenger') ||
                //     $nextPositionOfBottle.hasClass('car') ||
                //     $nextPositionOfBottle.hasClass('bottle')
                // ) {
                // } // do nothing
                if ($nextPositionOfBottle.length) {
                    counter++;
                    $nextPositionOfBottle.addClass('bottle');
                    if (counter > 3) {
                        clearInterval(interval)}
                }

            }, 1000)
        })();


        // Car

        gameBoard.keydown(function moveCar(event) {
            event.preventDefault();
            var lastPositionOfCar = $(this).find('td.car');
            var nextPositionOfCar;
            var whatKeyIsPressed = event.which || event.keyCode;
            var moveDirection = resolveDirection(whatKeyIsPressed);

            if (!moveDirection) {
                return
            }

            if (IS_DRUNK) {
                moveDirection = invertDirection(moveDirection);
            }

            switch (moveDirection) {
                case 'LEFT':
                    nextPositionOfCar = $(this).find('td.car').prev();
                    break;
                case 'UP':
                    nextPositionOfCar = $(this).find('td.car').parent().prev().find(':nth-child(' + (lastPositionOfCar.index() + 1) + ')');
                    break;
                case 'RIGHT':
                    nextPositionOfCar = $(this).find('td.car').next();
                    break;
                case 'DOWN':
                    nextPositionOfCar = $(this).find('td.car').parent().next().find(':nth-child(' + (lastPositionOfCar.index() + 1) + ')');
                    break;
            }
            checkPossibilityOfMove(nextPositionOfCar, lastPositionOfCar);
        });

        function checkPossibilityOfMove(nextPositionOfCar, lastPositionOfCar) {
            if (nextPositionOfCar.hasClass('building') || nextPositionOfCar.length === 0) {
                // do nothing -> break
            }
            else if (nextPositionOfCar.hasClass('passenger')) {
                nextPositionOfCar.removeClass('passenger').addClass('car');
                lastPositionOfCar.removeClass('car');
                score += 1;
                console.log(score);
            }
            else if (nextPositionOfCar.hasClass('bottle')) {
                nextPositionOfCar.removeClass('bottle').addClass('car');
                lastPositionOfCar.removeClass('car');
                IS_DRUNK = true;
                setTimeout(function () {
                    IS_DRUNK = false;
                }, 3000);
            }
            else {
                nextPositionOfCar.addClass('car');
                lastPositionOfCar.removeClass('car');
            }
        }

        function resolveDirection(whatKeyIsPressed) {
            switch (whatKeyIsPressed) {
                case 37:
                    return 'LEFT';
                case 38:
                    return 'UP';
                case 39:
                    return 'RIGHT';
                case 40:
                    return 'DOWN';
            }
        }

        function invertDirection(direction) {
            if (direction === 'LEFT') {
                return 'RIGHT'
            }
            if (direction === 'UP') {
                return 'DOWN'
            }
            if (direction === 'RIGHT') {
                return 'LEFT'
            }
            if (direction === 'DOWN') {
                return 'UP'
            }
        }

    });
})();
