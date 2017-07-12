// Moving vehicle

(function () {
    $(document).ready(function () {

        var game = $('#game');

        function times(n, callback) {
            for (var i = 0; i < n; i += 1) {
                callback(i);
            }
        }

        var gameBoard = $('<table>');
        var size = 10;

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

        function startPositionOfCar () {
            $('tr:nth-child(10) td:nth-child(1)').addClass('car');
        }

        function moveCar () {
            gameBoard.keydown(function (event) {
                var lastPositionOfCar =  $(this).find('td.car');

                var whatKeyIsPressed = event.which || event.keyCode;

                switch (whatKeyIsPressed) {
                    case 37:
                        $(this).find('td.car').prev().addClass('car');
                        break;
                    case 38:
                        $(this).find('td.car').parent().prev().find(':nth-child('+ (lastPositionOfCar.index() + 1) +')').addClass('car');
                        break;
                    case 39:
                        $(this).find('td.car').next().addClass('car');
                        break;
                    case 40:
                        $(this).find('td.car').parent().next().find(':nth-child(' + (lastPositionOfCar.index() + 1) + ')').addClass('car');
                        break;
                }




                lastPositionOfCar.removeClass('car');
            });
        }

        startPositionOfCar();
        moveCar();





    });
})();
