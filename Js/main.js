var btn = document.getElementById("go-button");

function buttonClicked(){
    console.log("button clicked");
    // btn.removeEventListener("click", buttonClicked);
    // document.getElementbyId("text").innerHTML = "Dont do it";
    var customText = document.getElementByClassName("my-input"); // le texte mis dans l'input
    var textArea = document.getElementByClassName("my-textearea");
    var results = document.getElementById("text");

    console.log(customText);
    results.innerHTML = "Hello" + customText[0].value + "<br/>";
    results.innerHTML += "Message: " + textArea[0].value + "<br/>";

    //la difference entre innerText et innerHTML c'est que ce dernier retourne meme les <> alors que lautre c'est vraiment que des strings

}

var hobbies = ["pizzas", "gaming", "reading", "programming", "music"];

hobbies.push("archery");
console.log(hobbies.shift());

hobbies.unshift("blacksmithing");

// hobbies.forEach(function(i, is){
//     console.log("I like", i, is)
// });

if(hobbies.indexOf('reading') > -1){ // pour savoir si reading est dans l'array
    console.log("I like reading!");
}

if(hobbies.indexOf('sport') === -1){ // pour savoir si reading est dans l'array
    console.log("not in array");
}

btn.addEventListener("click", buttonClicked);



// -------------------------------


function saySomething(phrase){
    console.log("You said: " + phrase);
}

function getPhraseLength(phrase, another){
    var l = phrase.length;
    
    if(typeof another !== undefined){
        l += another.length;
    }

    return l;
}

var p1 = " This is longer";
var p2 = " This is shorter";

var thisLength = getPhraseLength(p1, p2);

console.log(thisLength);


//----------------------------------

function getPhrase(phrase, another){
    var l = phrase.length;
    
    if(typeof another !== undefined){
        l += another.length;
    }

    function printBoth(){
        return phrase + " " + another;
    }

    return printBoth();
}

var p1 = " This is longer";
var p2 = " This is shorter";

var computed = getPhrase(p1, p2);

console.log(computed);

var thisLength = getPhraseLength(p1, p2);

console.log(thisLength);

//--------------------------
//multiple parameter with object 

function getPhrase(params){

    var l = params.phrase.length;

    if(typeof params.another !== "undefined"){
        l += params.another.length;
    }
    

    return l;
}

var p1 = " This is longer";
var p2 = " This is shorter";

var computed = getPhrase(phrase : p1, another : p2);

console.log(computed);

//----------------------------

function missingno(numbers){
    var missing = -1; //default state

    for (var i = 0, i <= numbers.length ,i++){ // on initialise
        if (numbers.indexOf(1) === -1) { //pour vérifier qu'il est dans l'array
            missing = i;
        } 
    }

    return missing;
}

var numbers = [3, 8, 7, 9, 6, 1, 12, 5, 14, 2, 19, 16, 10, 11, 15, 13, 17, 20 ], 

console.log(missing(numbers)); // 4


// didnt work what 
//     I tried to do 


//   count = 5, 8, 7, 9, 6, 1, 12, 5, 14, 2, 19, 16, 10, 11, 15, 13, 17, 20 ;
// var missing = new Array();

// for (var i = 1; i <= count; i++) {
//   if (numbers.indexOf(i) == -1) {
//     missing.push(i);
//   }
// }
// console.log(missing); //4


//------------------------------------
//object oriented with class and constructor 

class Animal {

    constructor(name, height, weight){
        console.log("animal created", name);
        this.name = name;
        this.height = height;
        this.weight = weight;

    }
    nameLength
    return this.name.length;
}

Animal.planet = "earth";

//------------------------------------
//object oriented with class and constructor EXTENDS

class Dog extends Animal {

    constructor(name, height, weight, barkVolume, leashColor, speed) {
        super (name, height, weight);

        this.barkVolume = barkVolume;
        this.leashColor = leashColor;
        this.speed = speed;
    }

    bark() {
        if (this.barkVolume > 50){
            console.log(this.name + "barks loudly:" + this.barkVolume,);
        } else {
            console.log(thius.name + "barks timidly" + this.barVolume,);
        }
    }
}

class Fish extends Animal {

    constructor(name, height, weight, swimSpeed){
        super (name, weight, height);

        this.swimSpeed = swimSpeed;
    }

    swim(){
        if(this.swimSpeed > 50){
            console.log(this.name + "swim like a mantal at: " + this.swimSpeed );
        } else {
            console.log(this.name + "swim and swim at the same at" + this.swimSpeed);
        }
    }
}






























