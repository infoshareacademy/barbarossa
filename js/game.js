(function () {
    $(document).ready(function () {

        var game = $('#game');
        var ranking = $('#rank-board');

        // Board

        function times(n, callback) {
            for (var i = 0; i < n; i += 1) {
                callback(i);
            }
        }

        var gameBoard = $('<table class="game-board">');
        var size = 25;
        var score = 0;
        var scoreBoard = $('<p class="score-board">');
        var timeBoard = $('<p class="time-board">');
        var $buttonExit = $('<button class="game-exit-button">');
        var endText = $('<p class = "end-text">');
        var $buttonShowRanking = $('<button class="ranking-show-button">');
        var $buttonBackToMenu = $('button.menu-show-button');


        times(size, function () {
            var tr = $('<tr>');
            times(size, function () {
                var td = $('<td>');
                tr.append(td)
            });
            gameBoard.append(tr).attr('tabindex', 0);
        });

        game.append(gameBoard).append(scoreBoard).append(timeBoard).append($buttonExit).append(endText).append($buttonShowRanking);
        scoreBoard.text('Zebrani pasażerowie: ' + score);
        timeBoard.text('2:00');
        $buttonExit.text('ZAKOŃCZ');
        $buttonShowRanking.text('Pokaż ranking');

        (function startPositionOfCarAndObstacles() {
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

        // Start, end, reset game and ranking

        var $startGameButton = $('.game-button--entry');
        var $countdown = $('<p class="countdown">');
        var $music = $('<embed src="music/bonanza.mp3" autostart="true" loop="true" width="0" height="0">');
        var $musicForOperaAndIE = $('<bgsound src="music/bonanza.mp3" loop="infinite">');
        var IS_END = false;
        var gameTime = 60;

        moveCar();
        moveCarForSmallDevice();

        game.append($countdown);

        $startGameButton.click(function () {
            event.preventDefault();

            resetGame();

            var timeToShow = 3;
            $countdown.text(timeToShow);
            $countdown.show();

            var countdownToStart = setInterval(function showCountdown() {
                $countdown.text(timeToShow);
                timeToShow--;
                if (timeToShow === -1) {
                    clearInterval(countdownToStart);
                    $countdown.hide();
                    startGame();
                }
            }, 1000)
        });

        $buttonExit.click(function () {
            IS_END = true;
            $music.remove();
            $musicForOperaAndIE.remove();
        });

        $buttonShowRanking.click(showRanking);

        $buttonBackToMenu.click(function () {
            event.preventDefault();
            $('.game-begin-board').show();
            $gameSwitch.children().removeClass('game-main-wrapper-visible');
            $gameSwitch.children().addClass('game-main-wrapper-hidden');
        });

        function startGame() {

            $('body').append($music).append($musicForOperaAndIE);

            gameBoard.focus();
            addElements('passenger', 3000, true, 10000, 'passenger--red', 20000);
            addElements('bottle', 10000, false);

            var gameTimeInterval = setInterval(function showGameTime() {
                gameTime--;
                if (IS_END) {
                    clearInterval(gameTimeInterval);
                    clearTimeout(gameTimeout);
                }
                if (gameTime < -50) {
                    timeBoard.text('0:0' + (60 + gameTime));
                }
                else if (gameTime < 0) {
                    timeBoard.text('0:' + (60 + gameTime));
                }
                else if (gameTime < 10) {
                    timeBoard.text('1:0' + gameTime);
                }
                else {
                    timeBoard.text('1:' + gameTime);
                }
                gameBoard.focus(); // get focus after 1 second to prevent click off the game board
            }, 1000);


            var gameTimeout = setTimeout(function clearGameTime() {
                clearInterval(gameTimeInterval);
                timeBoard.text('0:00');
                endGame();
            }, 120000)
        }

        function resetGame() {
            IS_END = false;
            gameTime = 60;
            score = 0;
            scoreBoard.text('Zebrani pasażerowie: ' + score);
            timeBoard.text('2:00');
            endText.hide();
            $buttonShowRanking.hide();

            var $bottles = $(gameBoard).find('td.bottle');
            var $passengers = $(gameBoard).find('td.passenger');
            var $car = $(gameBoard).find('td.car');

            $bottles.removeClass('bottle');
            $passengers.removeClass('passenger');
            $car.removeClass('car');

            $('tr:nth-child(10) td:nth-child(2)').addClass('car');
        }

        function endGame() {

            IS_END = true;
            $music.remove();
            $musicForOperaAndIE.remove();

            var timeStamp = Math.floor(Date.now() / 1000);
            endText.html('Gratulacje !<br> Zdobyłeś/aś ' + score + ' punktów.');
            endText.show();                 // Show score when game is finished
            $buttonShowRanking.show();

            // Ranking //

            localStorage.setItem('ranking-' + timeStamp.toString(), score);
        }

        function showRanking() {

            $gameSwitch.children().removeClass('game-main-wrapper-visible');
            $gameSwitch.children().addClass('game-main-wrapper-hidden');
            ranking.show();


            var rankingBoard = $('<table>');
            var tableWidth = 3;
            var tableHeight = 11;
            var results = [];

            for (var i in window.localStorage) {
                if (results.length < 10) {
                    if (i.match(/^ranking-/)) {
                        results.push({
                            id: results.length + 1,
                            time: i.replace('ranking-', ""),
                            score: localStorage.getItem(i)
                        });
                    }
                }
            }

            times(tableWidth, function () {
                var tr = $('<tr>');
                times(tableHeight, function () {
                    var td = $('<td>');
                    tr.append(td);
                    td.append(results['0'].id)
                });
                rankingBoard.append(tr);
            });
            ranking.append(rankingBoard);

            // Set back to menu button to be under ranking
            var buttonBackToMenuOffset = -(ranking.height()/2) +'px';
            $buttonBackToMenu.css('bottom', buttonBackToMenuOffset);

        }

        // Passengers and bottles

        function addElements(elementClass, intervalTime, shouldDisapper, disappearTime, elementClassBlink, levelUpTime) {
            var counter = 0;
            var checkIsEnd = setInterval(function () {
                if (IS_END) {
                    clearInterval(addElementsInterval);
                    clearInterval(levelUpInterval);
                    clearInterval(checkIsEnd);
                }
            }, 500);

            var addElementsInterval = setInterval(function () {
                var $possiblePositionOfElement = $('#game td:not(.obstacle):not(.passenger):not(.car):not(.bottle)');
                var numberOfPossibility = $possiblePositionOfElement.length;
                counter++;

                if (numberOfPossibility === 0) {
                    return
                }
                var randomPositionIndex = Math.floor(numberOfPossibility * Math.random());
                var $nextPositionOfElement = $($possiblePositionOfElement[randomPositionIndex]);
                $nextPositionOfElement.addClass(elementClass);

                if (shouldDisapper === true) {
                    disappearElement($nextPositionOfElement, elementClass, elementClassBlink, disappearTime);
                }
            }, intervalTime);

            var levelUpInterval = setInterval(function () {
                disappearTime = disappearTime - 1000;
                if (disappearTime < 3000) {
                    clearInterval(levelUpInterval);
                }
            }, levelUpTime);

        }

        function disappearElement($nextPositionOfElement, elementClass, elementClassBlink, disappearTime) {
            setTimeout(function delayBlinkElement() {
                blinkElement($nextPositionOfElement, elementClass, elementClassBlink);
            }, disappearTime - 3000);

            setTimeout(function disappearElement() {
                if ($nextPositionOfElement.hasClass(elementClass)) {
                    $nextPositionOfElement.removeClass(elementClass);
                    if (IS_END) {
                        // do not lose points
                    }
                    else if (score > 0) {
                        score--;
                        scoreBoard.text('Zebrani pasażerowie: ' + score);
                    }
                }
            }, disappearTime);
        }

        function blinkElement($nextPositionOfElement, elementClass, elementClassBlink) {
            var blinkInterval = setInterval(function () {
                if ($nextPositionOfElement.hasClass(elementClass)) {
                    $nextPositionOfElement.toggleClass(elementClassBlink);
                }
                else {
                    clearInterval(blinkInterval);
                    $nextPositionOfElement.removeClass(elementClassBlink);
                }
            }, 500);
        }

        // Car

        var IS_DRUNK = false;

        function moveCar() {
            gameBoard.keydown(function moveCar(event) {
                event.preventDefault();
                var lastPositionOfCar = $(this).find('td.car');
                var nextPositionOfCar;
                var setupOfCar = '';
                var whatKeyIsPressed = event.which || event.keyCode;
                var moveDirection = setDirection(whatKeyIsPressed);

                if (!moveDirection) {
                    return // when click other key return
                }

                if (IS_DRUNK) {
                    moveDirection = invertDirection(moveDirection);
                    setupOfCar = 'car--drunk '
                }

                switch (moveDirection) {
                    case 'LEFT':
                        nextPositionOfCar = $(this).find('td.car').prev();
                        setupOfCar += 'car--left';
                        break;
                    case 'UP':
                        nextPositionOfCar = $(this).find('td.car').parent().prev().find(':nth-child(' + (lastPositionOfCar.index() + 1) + ')');
                        setupOfCar += 'car--up';
                        break;
                    case 'RIGHT':
                        nextPositionOfCar = $(this).find('td.car').next();
                        setupOfCar += 'car--right';
                        break;
                    case 'DOWN':
                        nextPositionOfCar = $(this).find('td.car').parent().next().find(':nth-child(' + (lastPositionOfCar.index() + 1) + ')');
                        setupOfCar += 'car--down';
                        break;
                }
                checkPossibilityOfMove(nextPositionOfCar, lastPositionOfCar, setupOfCar);
            });
        }

        function checkPossibilityOfMove(nextPositionOfCar, lastPositionOfCar, setupOfCar) {
            if (nextPositionOfCar.hasClass('obstacle') || nextPositionOfCar.length === 0) {
                // do nothing -> break
            }
            else if (nextPositionOfCar.hasClass('passenger')) {
                nextPositionOfCar.removeClass('passenger').addClass('car').addClass(setupOfCar);
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

        // Car for small devices

        function moveCarForSmallDevice() {
            var lastPositionOfCar;
            var nextPositionOfCar;
            var stillClickInterval;

            $('.arrow--up').bind("touchstart", function () {
                stillClickInterval = setInterval(function () {
                    lastPositionOfCar = gameBoard.find('td.car');
                    if (IS_DRUNK) {
                        nextPositionOfCar = gameBoard.find('td.car').parent().next().find(':nth-child(' + (lastPositionOfCar.index() + 1) + ')');
                        setupOfCar = 'car--drunk car--down';
                    }
                    else {
                        nextPositionOfCar = gameBoard.find('td.car').parent().prev().find(':nth-child(' + (lastPositionOfCar.index() + 1) + ')');
                        setupOfCar = 'car--up';
                    }
                    checkPossibilityOfMove(nextPositionOfCar, lastPositionOfCar, setupOfCar);
                }, 100);
            }).bind("touchend", function () {
                clearInterval(stillClickInterval);
            });
            $('.arrow--down').bind("touchstart", function () {
                stillClickInterval = setInterval(function () {
                    lastPositionOfCar = gameBoard.find('td.car');
                    if (IS_DRUNK) {
                        nextPositionOfCar = gameBoard.find('td.car').parent().prev().find(':nth-child(' + (lastPositionOfCar.index() + 1) + ')');
                        setupOfCar = 'car--drunk car--up';
                    }
                    else {
                        nextPositionOfCar = gameBoard.find('td.car').parent().next().find(':nth-child(' + (lastPositionOfCar.index() + 1) + ')');
                        setupOfCar = 'car--down';
                    }
                    checkPossibilityOfMove(nextPositionOfCar, lastPositionOfCar, setupOfCar);
                }, 100);
            }).bind("touchend", function () {
                clearInterval(stillClickInterval);
            });
            $('.arrow--right').bind("touchstart", function () {
                stillClickInterval = setInterval(function () {
                    lastPositionOfCar = gameBoard.find('td.car');
                    if (IS_DRUNK) {
                        nextPositionOfCar = gameBoard.find('td.car').prev();
                        setupOfCar = 'car--drunk car--left';
                    }
                    else {
                        nextPositionOfCar = gameBoard.find('td.car').next();
                        setupOfCar = 'car--right';
                    }
                    checkPossibilityOfMove(nextPositionOfCar, lastPositionOfCar, setupOfCar);
                }, 100);
            }).bind("touchend", function () {
                clearInterval(stillClickInterval);
            });
            $('.arrow--left').bind("touchstart", function () {
                stillClickInterval = setInterval(function () {
                    lastPositionOfCar = gameBoard.find('td.car');
                    if (IS_DRUNK) {
                        nextPositionOfCar = gameBoard.find('td.car').next();
                        setupOfCar = 'car--drunk car--right';
                    }
                    else {
                        nextPositionOfCar = gameBoard.find('td.car').prev();
                        setupOfCar = 'car--left';
                    }
                    checkPossibilityOfMove(nextPositionOfCar, lastPositionOfCar, setupOfCar);
                }, 100);
            }).bind("touchend", function () {
                clearInterval(stillClickInterval);
            });
        }
    });
})();