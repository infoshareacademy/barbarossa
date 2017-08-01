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
