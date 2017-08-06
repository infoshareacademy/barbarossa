(function () {
    var $k = $('.Klimek');
    var $r = $('.Richert');
    var $p = $('.Paczkowski');
    var $o = $('.Ostrowska');

    function photosTransform (a, b, c, d) {
        a.hover(function(){
            b.add(c).add(d).css('opacity', '0.3');
        },function(){
            b.add(c).add(d).css('opacity', '1');
        });
    }

    photosTransform($k, $r, $p, $o);
    photosTransform($r, $k, $p, $o);
    photosTransform($p, $r, $k, $o);
    photosTransform($o, $r, $k, $p);
})();