

$(document).ready(function(){
    $("#result").hide();
    $('form').on('submit', (event) => {
        event.preventDefault();
        var radioValue = $("input[name='ratingSelection']:checked").val();
        $( "#select" ).hide();
        $( "#result" ).show();
        $(".result_text").text("You selected % out of 5".replace("%", radioValue));
    })

});