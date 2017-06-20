(function()  {
    $(window).resize(function() {
        function addAttribute() {
            var mq = window.matchMedia("(max-width: 767px)");
            var i;
            if (mq.matches) {
                for (i = 0; i <= 3; i += 1) {
                    document.getElementsByClassName("nav-menu__item")[i].setAttribute("data-toggle", "collapse");
                    document.getElementsByClassName("nav-menu__item")[i].setAttribute("data-target", "#navbar-collapse");
                }
            }
            else {
                for (i = 0; i <= 3; i += 1) {
                    document.getElementsByClassName("nav-menu__item")[i].setAttribute("data-toggle", "");
                    document.getElementsByClassName("nav-menu__item")[i].setAttribute("data-target", "");
                }
            }
        }
        addAttribute();
    });
}) ();