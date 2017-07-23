$(".premiere").submit(function(e){
    var isFormValid = true;

    $("input").each(function(){

        if ($.trim($(this).val()).length == 0){
            // $(this).addClass("highlight");
            isFormValid = false;
        }
        // else{
        //     // $(this).removeClass("highlight");
        // }
    });

    if (!isFormValid) {
        e.preventDefault();
        alert("Wszystkie pola muszą być wypełnione");
    }
    return isFormValid;
});