// Moving vehicle

(function () {
    $(document).ready(function () {

        // Board

        var game = $('#game');

        function times(n, callback) {
            for (var i = 0; i < n; i += 1) {
                callback(i);
            }
        }

        var gameBoard = $('<table>');
        var size = 25;
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
            // Samochód
            $('tr:nth-child(10) td:nth-child(2)').addClass('car');

            // Osiedle nr 1
            $('tr:nth-child(4) td:nth-child(4)').addClass('building building-skycraper');
            $('tr:nth-child(4) td:nth-child(5)').addClass('building building-tree');
            $('tr:nth-child(5) td:nth-child(4)').addClass('building building-tree');
            $('tr:nth-child(5) td:nth-child(5)').addClass('building building-skycraper');
            $('tr:nth-child(4) td:nth-child(6)').addClass('building building-parking');
            $('tr:nth-child(4) td:nth-child(7)').addClass('building building-parking');
            $('tr:nth-child(4) td:nth-child(8)').addClass('building building-parking');
            $('tr:nth-child(4) td:nth-child(9)').addClass('building building-parking--last');
            $('tr:nth-child(5) td:nth-child(n+6):nth-child(-n+9)').addClass('building building-tree');

            //Osiedle nr 2
            $('tr:nth-child(4) td:nth-child(n+12):nth-child(-n+22)').addClass('building building-skycraper');
            $('tr:nth-child(5) td:nth-child(n+12):nth-child(-n+22)').addClass('building building-skycraper');

            // Osiedle nr 3
            $('tr:nth-child(8) td:nth-child(n+5):nth-child(-n+9)').addClass('building building-grass');
            $('tr:nth-child(9) td:nth-child(n+4):nth-child(-n+9)').addClass('building building-tree');
            $('tr:nth-child(8) td:nth-child(4)').addClass('building building-fountain');

            // Osiedle nr 4
            $('tr:nth-child(8) td:nth-child(n+12):nth-child(-n+13)').addClass('building building-skycraper');
            $('tr:nth-child(9) td:nth-child(n+12):nth-child(-n+13)').addClass('building building-skycraper');

            // Osiedle nr 5
            $('tr:nth-child(8) td:nth-child(n+16):nth-child(-n+17)').addClass('building building-skycraper');
            $('tr:nth-child(9) td:nth-child(n+16):nth-child(-n+17)').addClass('building building-skycraper');

            // Osiedle nr 5
            $('tr:nth-child(8) td:nth-child(n+20):nth-child(-n+22)').addClass('building building-skycraper');
            $('tr:nth-child(9) td:nth-child(n+20):nth-child(-n+22)').addClass('building building-skycraper');

            //Osiedle nr 7
            $('tr:nth-child(12) td:nth-child(n+4):nth-child(-n+9)').addClass('building building-skycraper');
            $('tr:nth-child(12) td:nth-child(n+10):nth-child(-n+22)').addClass('building building-tree');
            $('tr:nth-child(13) td:nth-child(n+4):nth-child(-n+21)').addClass('building building-grass');
            $('tr:nth-child(13) td:nth-child(22)').addClass('building building-fountain');

            //Osiedle nr 8
            $('tr:nth-child(n+16):nth-child(-n+22) td:nth-child(4)').addClass('building building-skycraper');
            $('tr:nth-child(n+16):nth-child(-n+22) td:nth-child(5)').addClass('building building-skycraper');

            //Osiedle nr 9
            $('tr:nth-child(n+16):nth-child(-n+22) td:nth-child(7)').addClass('building building-tree');
            $('tr:nth-child(n+16):nth-child(-n+22) td:nth-child(8)').addClass('building building-grass');

            //Osiedle nr 10
            $('tr:nth-child(16) td:nth-child(n+12):nth-child(-n+22)').addClass('building building-skycraper');
            $('tr:nth-child(17) td:nth-child(n+12):nth-child(-n+22)').addClass('building building-grass');
            $('tr:nth-child(19) td:nth-child(n+12):nth-child(-n+22)').addClass('building building-grass');
            $('tr:nth-child(18) td:nth-child(12)').addClass('building building-grass');
            $('tr:nth-child(18) td:nth-child(13)').addClass('building building-fountain');
            $('tr:nth-child(18) td:nth-child(14)').addClass('building building-grass');
            $('tr:nth-child(18) td:nth-child(15)').addClass('building building-skycraper');
            $('tr:nth-child(18) td:nth-child(16)').addClass('building building-grass');
            $('tr:nth-child(18) td:nth-child(17)').addClass('building building-fountain');
            $('tr:nth-child(18) td:nth-child(18)').addClass('building building-grass');
            $('tr:nth-child(18) td:nth-child(19)').addClass('building building-skycraper');
            $('tr:nth-child(18) td:nth-child(20)').addClass('building building-grass');
            $('tr:nth-child(18) td:nth-child(21)').addClass('building building-fountain');
            $('tr:nth-child(18) td:nth-child(22)').addClass('building building-grass');

            //Osiedle nr 11
            $('tr:nth-child(21) td:nth-child(n+12):nth-child(-n+22)').addClass('building building-skycraper');
            $('tr:nth-child(22) td:nth-child(n+12):nth-child(-n+22)').addClass('building building-skycraper');
            // Trawa dookoła
            $('tr:nth-child(n) td:nth-child(1)').addClass('building building-grass');
            $('tr:nth-child(1) td:nth-child(n)').addClass('building building-grass');
            $('tr:nth-child(n) td:nth-child(25)').addClass('building building-grass');
            $('tr:nth-child(25) td:nth-child(n)').addClass('building building-grass');
        })();

        // Passengers

        (function addPassengers() {
            var counter = 0;
            var interval = setInterval(function () {

                var x = (Math.floor(Math.random() * size - 1) + 1);
                var y = (Math.floor(Math.random() * size - 1) + 1);
                if ($('tr:nth-child(' + x + ') td:nth-child(' + y + ')').hasClass('building') ||
                    $('tr:nth-child(' + x + ') td:nth-child(' + y + ')').hasClass('passenger') ||
                    $('tr:nth-child(' + x + ') td:nth-child(' + y + ')').hasClass('car')
                ) {}
                else {
                    counter++;
                $('tr:nth-child(' + x + ') td:nth-child(' + y + ')').addClass('passenger');
                var clearClass = setInterval(function () {
                    $('tr:nth-child(' + x + ') td:nth-child(' + y + ')').removeClass('passenger');

                }, 10000)
                if (counter > 10)
                    clearInterval(interval);
            }
            }, 2000)
        })();

        // Car

        gameBoard.keydown(function moveCar(event) {
            event.preventDefault();
            var lastPositionOfCar = $(this).find('td.car');
            var nextPositionOfCar;
            var whatKeyIsPressed = event.which || event.keyCode;

            switch (whatKeyIsPressed) {
                case 37:
                    nextPositionOfCar = $(this).find('td.car').prev();
                    break;
                case 38:
                    nextPositionOfCar = $(this).find('td.car').parent().prev().find(':nth-child(' + (lastPositionOfCar.index() + 1) + ')');
                    break;
                case 39:
                    nextPositionOfCar = $(this).find('td.car').next();
                    break;
                case 40:
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
            else {
                nextPositionOfCar.addClass('car');
                lastPositionOfCar.removeClass('car');
            }
        }

    });
})();
