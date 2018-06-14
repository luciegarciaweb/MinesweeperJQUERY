//quand ma page est chargée j'exécute cette fonction
$(document).ready(function(){
    //alert("");
    for (var i = 0; i < 5800 ;i++){
        //var div = document.createElement('div');
        $('#maindiv').append('<div></div>');
        //equivalent à setAttribute de js
        $('div').addClass('box');
    };
     
    //console.log('maindiv');
    var color = "white";
    
    //selector//listener//callback
    $('.box').on("click", function(){
        //rajoute une class couleur
        $(this).addClass(color); //function body
    })
    
    $('#blue').on("click", function(){
        //rajoute une class couleur
        color = 'blue'; //function body
    })
    
      $('#orange').on("click", function(){
        //rajoute une class couleur
        color = 'orange'; //function body
    })
    
    $('#yellow').on("click", function(){
        //supprime une class couleur
        color= 'yellow'; //function body
    })
    
    $('#purple').on("click", function(){
        //supprime une class couleur
        color= 'purple'; //function body
    })
    
     $('#red').on("click", function(){
        //supprime une class couleur
        color= 'red'; //function body
    })  
    
     $('#green').on("click", function(){
        //supprime une class couleur
        color= 'green'; //function body
    })
    
     $('#white').on("click", function(){
        //supprime une class couleur
        color= 'white'; //function body
    })
    
    $('.box').on("dblclick", function(){
        //supprime une class couleur
        $(this).removeClass("red green blue white yellow orange purple"); //function body
    })
    
    $('#reset').on("click", function(){
        reset.removeClass("white green yellow red orange purple blue");
    })
    
})
