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
    //            CETTE TECHNIQUE NE MARCHE PAS
    // $('[data-trigger="dropdown"]').on('mouseenter', function(){ //dont forget to put it display none data trigger
    //     var submenu = $(this).parent().find('.submenu');
    //     submenu.addClass=('active');

    //     $('.profile-menu').on('mouseleave', function(){
    //         submenu.removeClass('active');
    //     });
    // });

    //autre facon 
    $(function() {
        var profileSubMenu = $('.profile-submenu');
        var loggingIn = $('.profile-menu-trigger');
            loggingIn.on('mouseenter', function(){
            // profileSubMenu.toggleClass('active'); TECHNIQUE QUI MARCHE PAS LA PEINE DECRIRE LE RESTE
            profileSubMenu.fadeIn(300);

            loggingIn.on('mouseleave', function(){
                profileSubMenu.fadeOut(300);   
            })
        }); 
    });

    //Inspiration codepen
    // $(function() {
    //     var box = $('.box');
    //     var button = $('.open-menu, .header-menu');
    //     button.on('click', function(){
    //       box.toggleClass('active');
    //     });
    //   });

    //Objectif : ce qu'on écrit dans le textarea peut etre ré utiliser/ modifier
    $('#prepend, #append, #replace').on('click', function(e){ //e = event, on target les 3 id button
        var el = $(e.currentTarget); //on déclare que el est le moment où on clic sur l'élément
        var action = el.attr('id'); // on lui attribut son id qu'on déclare action 
        var content = $('.text').val();

        if(action == "append"){ //maintenant pour chaque bouton cliquer on peut faire une action
            console.log("Append...");
            $('#main').prepend('content');
        } else if (action == "prepend"){
            console.log("Prepend...");
        } else if (action == "replace"){
            console.log("Replace...");
        }
    })

});