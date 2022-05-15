$(document).ready(function(){
    $("#results").hide();
    $("#submit").click(function() {
        $j( "#select" ).hide();
        $( "#results" ).show();
    });
});