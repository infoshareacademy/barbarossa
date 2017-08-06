(function () {
    $('#game-instruction').on('hidden.bs.modal', function () {
        // Load up a new modal...
        $('#game').modal('show')
    });
})();