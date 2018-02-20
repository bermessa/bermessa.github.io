$(document).ready(function() {

    //GLOBAL VARIABLES
    //=================================
    var helloWorld = ["Hello", "Bonjour", "Ciao", "Namaste", "Hola"];


    //FUNCTIONS
    //=================================

    function displayHelloWorld() {
        console.log("test");

        for (var i = 0; i < helloWorld.length; i++) {
            $(".aboutMeHello").append("<span>" + helloWorld[i] + "</span>");

            $(".aboutMeHello").css({
                "font-size": "40px",
                "font-family": "'Lobster Two', cursive",
                "display": "flex",
                "justify-content": "space-evenly"
            });
        }
    }


    //MAIN PROCESS
    //=================================
    displayHelloWorld()

});
