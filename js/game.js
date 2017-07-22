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
        var size = 25;
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


        (function startPositionOfCarAndBuildings() {
            // Samochód
            $('tr:nth-child(10) td:nth-child(2)').addClass('car');

            // Osiedle nr 1
            $('tr:nth-child(4) td:nth-child(4)').addClass('obstacle obstacle-skycraper');
            $('tr:nth-child(4) td:nth-child(5)').addClass('obstacle obstacle-tree--lighter');
            $('tr:nth-child(5) td:nth-child(4)').addClass('obstacle obstacle-tree');
            $('tr:nth-child(5) td:nth-child(5)').addClass('obstacle obstacle-skycraper');
            $('tr:nth-child(4) td:nth-child(n+6):nth-child(-n+9)').addClass('obstacle obstacle-skycraper');
            $('tr:nth-child(5) td:nth-child(n+6):nth-child(-n+9)').addClass('obstacle obstacle-tree--lighter');

            //Osiedle nr 2
            $('tr:nth-child(4) td:nth-child(n+12):nth-child(-n+22)').addClass('obstacle obstacle-skycraper');
            $('tr:nth-child(5) td:nth-child(n+12):nth-child(-n+22)').addClass('obstacle obstacle-skycraper');

            // Osiedle nr 3
            $('tr:nth-child(8) td:nth-child(n+5):nth-child(-n+9)').addClass('obstacle obstacle-grass');
            $('tr:nth-child(9) td:nth-child(n+4):nth-child(-n+9)').addClass('obstacle obstacle-tree--lighter');
            $('tr:nth-child(8) td:nth-child(4)').addClass('obstacle obstacle-fountain');

            // Osiedle nr 4
            $('tr:nth-child(8) td:nth-child(n+12):nth-child(-n+13)').addClass('obstacle obstacle-skycraper');
            $('tr:nth-child(9) td:nth-child(n+12):nth-child(-n+13)').addClass('obstacle obstacle-skycraper');

            // Osiedle nr 5
            $('tr:nth-child(8) td:nth-child(n+16):nth-child(-n+17)').addClass('obstacle obstacle-skycraper');
            $('tr:nth-child(9) td:nth-child(n+16):nth-child(-n+17)').addClass('obstacle obstacle-skycraper');

            // Osiedle nr 5
            $('tr:nth-child(8) td:nth-child(n+20):nth-child(-n+22)').addClass('obstacle obstacle-skycraper');
            $('tr:nth-child(9) td:nth-child(n+20):nth-child(-n+22)').addClass('obstacle obstacle-skycraper');

            //Osiedle nr 7
            $('tr:nth-child(13) td:nth-child(n+4):nth-child(-n+21)').addClass('obstacle obstacle-grass');
            $('tr:nth-child(12) td:nth-child(n+4):nth-child(-n+9)').addClass('obstacle obstacle-skycraper');
            $('tr:nth-child(12) td:nth-child(n+10):nth-child(-n+22)').addClass('obstacle obstacle-tree');
            $('tr:nth-child(13) td:nth-child(22)').addClass('obstacle obstacle-fountain');

            //Osiedle nr 8
            $('tr:nth-child(n+16):nth-child(-n+22) td:nth-child(4)').addClass('obstacle obstacle-skycraper');
            $('tr:nth-child(n+16):nth-child(-n+22) td:nth-child(5)').addClass('obstacle obstacle-skycraper');

            //Osiedle nr 9
            $('tr:nth-child(n+16):nth-child(-n+22) td:nth-child(7)').addClass('obstacle obstacle-tree--lighter');
            $('tr:nth-child(n+16):nth-child(-n+22) td:nth-child(8)').addClass('obstacle obstacle-grass');

            //Osiedle nr 10
            $('tr:nth-child(16) td:nth-child(n+12):nth-child(-n+22)').addClass('obstacle obstacle-skycraper');
            $('tr:nth-child(17) td:nth-child(n+12):nth-child(-n+22)').addClass('obstacle obstacle-grass');
            $('tr:nth-child(19) td:nth-child(n+12):nth-child(-n+22)').addClass('obstacle obstacle-grass');
            $('tr:nth-child(18) td:nth-child(12)').addClass('obstacle obstacle-grass');
            $('tr:nth-child(18) td:nth-child(13)').addClass('obstacle obstacle-fountain');
            $('tr:nth-child(18) td:nth-child(14)').addClass('obstacle obstacle-grass');
            $('tr:nth-child(18) td:nth-child(15)').addClass('obstacle obstacle-skycraper');
            $('tr:nth-child(18) td:nth-child(16)').addClass('obstacle obstacle-grass');
            $('tr:nth-child(18) td:nth-child(17)').addClass('obstacle obstacle-fountain');
            $('tr:nth-child(18) td:nth-child(18)').addClass('obstacle obstacle-grass');
            $('tr:nth-child(18) td:nth-child(19)').addClass('obstacle obstacle-skycraper');
            $('tr:nth-child(18) td:nth-child(20)').addClass('obstacle obstacle-grass');
            $('tr:nth-child(18) td:nth-child(21)').addClass('obstacle obstacle-fountain');
            $('tr:nth-child(18) td:nth-child(22)').addClass('obstacle obstacle-grass');

            //Osiedle nr 11
            $('tr:nth-child(21) td:nth-child(n+12):nth-child(-n+22)').addClass('obstacle obstacle-skycraper');
            $('tr:nth-child(22) td:nth-child(n+12):nth-child(-n+22)').addClass('obstacle obstacle-skycraper');

            // Detale
            $('tr:nth-child(16) td:nth-child(11)').addClass('obstacle obstacle-repair--blockade');
            $('tr:nth-child(16) td:nth-child(9)').addClass('obstacle obstacle-repair--blockade');
            $('tr:nth-child(16) td:nth-child(10)').addClass('obstacle obstacle-repair--sign');
            $('tr:nth-child(22) td:nth-child(11)').addClass('obstacle obstacle-repair--blockade');
            $('tr:nth-child(22) td:nth-child(9)').addClass('obstacle obstacle-repair--blockade');
            $('tr:nth-child(22) td:nth-child(10)').addClass('obstacle obstacle-repair--sign');

            // Trawa dookoła
            $('tr:nth-child(n) td:nth-child(1)').addClass('obstacle obstacle-grass');
            $('tr:nth-child(1) td:nth-child(n)').addClass('obstacle obstacle-grass');
            $('tr:nth-child(n) td:nth-child(25)').addClass('obstacle obstacle-grass');
            $('tr:nth-child(25) td:nth-child(n)').addClass('obstacle obstacle-grass');
        })();

        // Passengers and bottles

        addElements('passenger', 10, 1000, true, 5000);
        addElements('bottle', 3, 5000, false);

        function addElements(elementClass, counterLimit, intervalTime, shouldDisapper, disappearTime) {
            var counter = 0;
            var interval = setInterval(function () {

                var $possiblePositionOfElement = $('td:not(.obstacle):not(.passenger):not(.car):not(.bottle)');
                var numberOfPossibility = $possiblePositionOfElement.length;

                if (numberOfPossibility === 0) {
                    return
                }
                counter++;
                var randomPositionIndex = Math.floor(numberOfPossibility * Math.random());
                var nextPositionOfElement = $possiblePositionOfElement[randomPositionIndex];

                nextPositionOfElement.classList.add(elementClass);
                if (shouldDisapper === true) {
                    setTimeout(function delayInterval() {
                        var timeToShow = (disappearTime / 1000) - 3;
                        var lastSeconds = setInterval(function showLastSeconds() {
                            if (nextPositionOfElement.classList.contains('passenger')) {
                                nextPositionOfElement.innerText = timeToShow;
                                timeToShow--;
                                if (timeToShow === 0) {
                                    clearInterval(lastSeconds)
                                }
                            }
                            else {
                                clearInterval(lastSeconds)
                            }
                        }, 1000);
                    }, 1000);
                    setTimeout(function disappearElement() {
                        nextPositionOfElement.innerText = ('');
                        nextPositionOfElement.classList.remove(elementClass);
                        score--;
                        scoreBoard.text('Zebrani pasażerowie: ' + score);
                    }, disappearTime);
                }
                if (counter >= counterLimit) {
                    clearInterval(interval)
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
