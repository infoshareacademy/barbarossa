// Moving vehicle

(function () {
    $(document).ready(function() {
        $('main').hide();
        $('nav').hide();
        $('footer').hide();
        var game = $('#game');
        game.show();

        function times(n, callback) {
            for (var i = 0; i < n; i += 1) {
                callback(i);
            }
        }
        var table = $('<table>');
        var size = 10;

        times(size, function () {
            var tr = $('<tr>');
            times(size, function () {
                var td = $('<td>');
                tr.append(td)
            });
            table.append(tr)
        });

        game.append(table);
    });
})();