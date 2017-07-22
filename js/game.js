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
        var scoreBoard = $('<p>');


        times(size, function () {
            var tr = $('<tr>');
            times(size, function () {
                var td = $('<td>');
                tr.append(td)
            });
            gameBoard.append(tr).attr('tabindex', 0)
        });

        game.append(gameBoard).append(scoreBoard);
        scoreBoard.text('Zebrani pasażerowie: ' + score);
        gameBoard.focus();


        (function startPositionOfCarAndObstacles() {
            $('tr:nth-child(10) td:nth-child(1)').addClass('car');
            $('tr:nth-child(odd) td:nth-child(odd)').addClass('obstacle').addClass('obstacle--building');
            $('tr:nth-child(5) td:nth-child(6)').addClass('obstacle').addClass('obstacle--building');
        })();

        // Passengers and bottles

        addElements('passenger', 10, 1000, true, 5000);
        addElements('bottle', 3, 5000, false);

        function addElements(elementClass, counterLimit, intervalTime, shouldDisapper, disappearTime) {
            var counter = 0;
            var addElementsInterval = setInterval(function () {

                var $possiblePositionOfElement = $('td:not(.obstacle):not(.passenger):not(.car):not(.bottle)');
                var numberOfPossibility = $possiblePositionOfElement.length;

                if (numberOfPossibility === 0) {
                    return
                }
                counter++;
                var randomPositionIndex = Math.floor(numberOfPossibility * Math.random());
                var $nextPositionOfElement = $($possiblePositionOfElement[randomPositionIndex]);

                $nextPositionOfElement.addClass(elementClass);
                if (shouldDisapper === true) {
                    setTimeout(function delayInterval() {
                        var timeToShow = (disappearTime / 1000) - 2;
                        var lastSecondsInterval = setInterval(function showLastSeconds() {
                            if ($nextPositionOfElement.hasClass('passenger')) {
                                // $nextPositionOfElement.html('<span class="last-seconds">' + timeToShow + '</span>');
                                // var lastSecondsText =  $('span.last-seconds');
                                // var blinkLastSecondsInterval = setInterval( function blinkLastSecondsText() {
                                //     lastSecondsText.fadeIn(500).fadeOut(500);
                                // });
                                $nextPositionOfElement.text(timeToShow);
                                timeToShow--;
                                if (timeToShow === 0) {
                                    clearInterval(lastSecondsInterval);
                                }
                            }
                            else {
                                clearInterval(lastSecondsInterval);
                            }
                        }, 1000);
                    }, 1000);
                    setTimeout(function disappearElement() {
                        $nextPositionOfElement.text('');
                        $nextPositionOfElement.removeClass(elementClass);
                        score--;
                        scoreBoard.text('Zebrani pasażerowie: ' + score);
                    }, disappearTime);
                }
                if (counter >= counterLimit) {
                    clearInterval(addElementsInterval)
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
                nextPositionOfCar.removeClass('passenger').addClass('car').addClass(setupOfCar).text('');
                lastPositionOfCar.removeClass();
                score += 1;
                scoreBoard.text('Zebrani pasażerowie: ' + score);
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
