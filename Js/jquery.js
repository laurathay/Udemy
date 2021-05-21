$(document).ready(function(){

    //callbacks
    function printThis(el){
        console.log($(this).text()); //this aurait pu etre el ca aurait ete pareil
        if($(this).text()){
            console.log($(this).text);
        } else {
            console.log($(this).val());
        }
    }

    $('input').focusin(printThis);

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

    $(document).on('contextmenu', function(){
        return false;
    });
    
    //SWITCH CASE 
    $(document).on('mousedown', function(event){
        event.stopPropagation(); //pcq du coup le clic droit apparait sur les deux coté du coup on utilise ca plutot que preventDefault

        // switch(event. which){ //like an if but proper
        //     case 1: //lorsque levenement de la souris = 1 on écrit
        //         console.log("Clicked left mouse button");
        //         break;
        //     case 2:
        //         console.log("Clicked middle mouse button");
        //         break;
        //     case 3:
        //         console.log("Clicked right mouse button");
        //         break;
        // }

        //la on est passé a un if pcq c'est juste le bouton droit qu'on veut
        if(event.which == 3){ //donner la position de la souris quand on clic a droite
            console.log(event.pageX, event.pageY);

            //before showing the menu we determine if something
            //should be hidden or not, on a rajouté la class shown 
            $('.hidden').removeClass('shown');

            if($(event.target).is('img')){
                $('.saveimg', '.newtab').addClass('shown');
            } else if ($(event.target).is('a')) {
                $('.newtab').addClass('shown');
            } //------- partie a revoir comprends pas pourquoi le clic droit ne change pas comme je lui dit sur limage & le lien ---------

            $('#context').css ({
                top: event.pageY,
                left: event.pageX
            });

            $('#context').fadeIn(); //si on laisse juste show a la place de fadeIn ca va juste le laisser la 
            return false;
        }

        $('#context').fadeOut(); // avec fadeIn fadeOut, il apparait et disparait là où on clique a droite

    })

    //Custom context menu, pageY and pageX
    $(document).on('contextmenu'), function(){
        return false;
    } 



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
        e.preventDefault(); //comme on a mis une action sur le form, comme ca elle fait les actions qu'on lui dit sur les boutons et non celui déjà inscrit sur le HTML
        
        var el = $(e.currentTarget); //on déclare que el est le moment où on clic sur l'élément
        var action = el.attr('id'); // on lui attribut son id qu'on déclare action 
        var content = $('.text').val();
        //THIS IS CONDITIONAL 
        if(action == "append"){ //maintenant pour chaque bouton cliquer on peut faire une action
            console.log("Append...");
            $('#main').append("<a href='#'>" + content + "</a>");
        } else if (action == "prepend"){
            console.log("Prepend...");
            $('#main').prepend(content);

        } else if (action == "replace"){
            console.log("Replace...");
            $('#main').html(content); //html c'est comme innerHTML

        }

        $('#text').val(''); //celle ci suffit pour juste remplacer la valeur de ce qu'on écrit dans le textarea dans la div text
    })

    //focusin focusout usually on form to know if there is enough letters etc
    $('textarea').focusin (function(){
        console.log("focused in the textarea");
    });

    $('textarea').focusout (function(){
        console.log("textarea has lost focus")
    });

    $('input').focusout (function(){
        if($(this).val().indexOf('0') > -1 && $(this).val().indexOf('.') > -1 ){
            $('.status').html("Valid email");
        } else {
            $('status').html("Your email in invalide"); 
        };
    })

    //Contain
    $('p:contains("Lorem")').html("This is suprisinly yes"); //si le paragraph contient Lorem on écrit this is surprisingly yes

    //each
    $(this).each(printThis); //c'est pour le callback tout en haut 

    if($(':contains("Lorem")').hasClass('my-selfhjuk')){ //pour voir si Lorem est contenu et a la class my-selfhjuk
        console.log("Lorem is inside the paragrah"); //on écrit ca si c'est le cas sinon rien n'apparait car if boolean
    };

    //PreventDefault 
    $('[href="https://google.com').on('click', function(event){
        console.log('linking to google?');
        //on peut aussi marquer a la place return false; ca marcherait aussi
        event.preventDefault(); //pour empecher que lorsqu'on clic sur le lien ca accède au lien 
    })

    //css
    $('input').css({
        backgroud: '#FCC',
        padding: '10px',
        borderColor: 'black',
        backgroudSize: 'cover'
    });

});