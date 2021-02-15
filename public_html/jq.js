
$(function () {
    //init();

   // $("#kezd").click(init);
    $("#kezd").on("click", init);
});

function init() {
    //alert("hiba");
    // $("div").eq(0).html("Ide <b>ird</b>");
    //alert($("div")).eq((0).html());
    $("#jatekter").empty();

    for (var i = 0; i < 5; i++) {
        //   $("#jatekter").append("<img src='valami.jpg' alt='valami'");

        $("#jatekter").append("<div>");

        $("#jatekter div").eq(i).append("<img>");

        $("#jatekter div img").eq(i).attr({"src": "valami.jpg", "alt": "valami"});

    }
    $("#jatekter div ").css({"background-color": "cyan", "padding": "2%"});

    $("#jatekter div").mouseenter(
            function () {
                $(this).css({"background-color": "red", "padding": "2%"});

            }
    );
    $("#jatekter div").mouseleave(
            function () {
                $(this).css({"background-color": "red", "padding": "2%"});
            }
    );
    
       $("#jatekter div").click(
            function () {
                $(this).hide(1000);
                $(this).show(1000);
            }
    );


}
