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
    results.innerHTML += "Message: " + textArea[0].text;

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