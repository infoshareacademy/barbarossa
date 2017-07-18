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


        (function startPositionOfCarAndObstacles() {
            $('tr:nth-child(10) td:nth-child(1)').addClass('car');
            $('tr:nth-child(5) td:nth-child(5)').addClass('obstacle').addClass('obstacle--building');
            $('tr:nth-child(5) td:nth-child(6)').addClass('obstacle').addClass('obstacle--building');
        })();

        // Passengers and bottles

        addElements('passenger',20,100,5000);
        addElements('bottle',3,5000,60000);

        function addElements(elementClass, counterLimit, intervalTime, disappearTime) {
            var counter = 0;
            var interval = setInterval(function () {

                var x = (Math.floor(Math.random() * size) + 1);
                var y = (Math.floor(Math.random() * size) + 1);
                var $nextPositionOfElement = $('tr:nth-child(' + x + ') td:nth-child(' + y + '):not(.obstacle):not(.passenger):not(.car):not(.bottle)');

                if ($nextPositionOfElement.length) {
                    counter++;
                    $nextPositionOfElement.addClass(elementClass);
                    setTimeout(function disappearElement() {
                        $nextPositionOfElement.removeClass(elementClass);
                    }, disappearTime);
                    if (counter >= counterLimit) {
                        clearInterval(interval)}
                }

            }, intervalTime)
        }

        // Car

        gameBoard.keydown(function moveCar(event) {
            event.preventDefault();
            var lastPositionOfCar = $(this).find('td.car');
            var nextPositionOfCar;
            var setupOfCar = 'car';
            var whatKeyIsPressed = event.which || event.keyCode;
            var moveDirection = setDirection(whatKeyIsPressed);

            if (!moveDirection) {
                return // when click other key return
            }

            if (IS_DRUNK) {
                moveDirection = invertDirection(moveDirection);
            }

            switch (moveDirection) {
                case 'LEFT':
                    nextPositionOfCar = $(this).find('td.car').prev();
                    setupOfCar = 'car--left';
                    break;
                case 'UP':
                    nextPositionOfCar = $(this).find('td.car').parent().prev().find(':nth-child(' + (lastPositionOfCar.index() + 1) + ')');
                    setupOfCar = 'car--up';
                    break;
                case 'RIGHT':
                    nextPositionOfCar = $(this).find('td.car').next();
                    setupOfCar = 'car--right';
                    break;
                case 'DOWN':
                    nextPositionOfCar = $(this).find('td.car').parent().next().find(':nth-child(' + (lastPositionOfCar.index() + 1) + ')');
                    setupOfCar = 'car--down';
                    break;
            }
            checkPossibilityOfMove(nextPositionOfCar, lastPositionOfCar, setupOfCar);
        });

        function checkPossibilityOfMove(nextPositionOfCar, lastPositionOfCar, setupOfCar) {
            if (nextPositionOfCar.hasClass('obstacle') || nextPositionOfCar.length === 0) {
                // do nothing -> break
            }
            else if (nextPositionOfCar.hasClass('passenger')) {
                nextPositionOfCar.removeClass('passenger').addClass('car').addClass(setupOfCar);
                lastPositionOfCar.removeClass();
                score += 1;
                console.log(score);
            }
            else if (nextPositionOfCar.hasClass('bottle')) {
                nextPositionOfCar.removeClass('bottle').addClass('car').addClass(setupOfCar);
                lastPositionOfCar.removeClass();
                IS_DRUNK = true;
                setTimeout(function () {
                    IS_DRUNK = false;
                }, 3000);
            }
            else {
                nextPositionOfCar.addClass('car').addClass(setupOfCar);
                lastPositionOfCar.removeClass();
            }
        }

        function setDirection(whatKeyIsPressed) {
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
