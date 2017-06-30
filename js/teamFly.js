jQuery(document).ready(function(){
    jQuery('.team-single').addClass("hideMe").viewportChecker({
        classToAdd: 'showMe animated fadeIn',
        offset: 100
    });
});