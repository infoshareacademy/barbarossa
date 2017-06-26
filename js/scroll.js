$('.smooth-scroll').smoothScroll({
        offset: -80,
        speed: 600,
    });
$('#sign').smoothScroll({
    afterScroll: function(options) {
        $(options.scrollTarget).find('#firstName').focus();
    }
});
// usunac klase smooth-scroll z 45 linii do testowania powyższego focusa

// Przykład z dokumentacji
// $('a.example').smoothScroll({
//     afterScroll: function(options) {
//         $(options.scrollTarget).find('input')[0].focus();
//     }
// });