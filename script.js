

$("#button-addon2").click(function(){
    var inputTxt = $(".form-control").val();

    var x = '<label class="list-group-item">' +
                '<input class="form-check-input me-1" type="checkbox" value="">' +
                inputTxt +
                '</label>';


    if ($(".form-control").val() == "") {
        alert("Sie müssen etwas rein schreiben");
    }
    else {
        $(".container").append(x);
        $(".form-control").val("");
    }
})

$(".form-control").keydown(function(e){
    var key = e.which;
    if (key == 13){
        $("#button-addon2").trigger('click');
    }
})

$(document).on("click", ".list-group-item", function(e){
        $(e.currentTarget).css("text-decoration", "line-through");
})

