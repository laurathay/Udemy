$(document).ready(function(){

    //difference between jquery and vanilla
    // var el = document.getElementById('text');
    // console.log('In Vanilla Js :', el);
    // console.log('In JQuery : ', + $(el));
    
    // //innerHTML
    // document.getElementById('text').innerHTML="This is my text";
    // $('#text').html('This is now my text');
    
    // document.getElementsByClassName('my-input')[0].value = "Value of input"; //si on marque pas l'index ca marchera pas pcq avec my input ca va afficher un tableau 
    // $('input').val("Value of input");

    // //events 
    // $('go-button').on ('click', function() {
    //     alert("Good job pressing the button!");
    // }); 

    // $('go-button').on ('hover', function() {
    //     alert("Good job pressing the button!");
    // }); 


    //make the dropdown menu open on click
    $('[data-trigger="dropdown"]').on('mouseenter', function(){ //dont forget to put it display none data trigger
        var submenu = $(this).parent().find('.submenu');
        submenu.addClass=('active');

        $(this).on('mouseleaves', function(){
            submenu.removeClass('active');
        });
    });

    //autre essaie
    $(function() {
        var box = $('.box');
        var button = $('.open-menu, .header-menu');
        button.on('click', function(){
          box.toggleClass('active');
        });
      });




});