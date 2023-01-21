document.getElementById("sapsan").innerHTML= "Hello Sapsan!";

// console.log(document.getElementsByClassName("header"));
// console.log(document.getElementsByTagName("div"));

let divs = document.getElementsByTagName("div");
divs[1].innerHTML = "Hi";
// console.log(divs[0]);


let headers = document.getElementsByClassName("header");

for(let i = 0; i< headers.length; i++){
    headers[i].innerHTML = "My header";
}


let template = document.getElementById("template");
let blocks = document.getElementsByClassName("block");

for (let i =0; i< blocks.length; i++){
    blocks[i].innerHTML = template.innerHTML;
}


// quesry selector

let infoBlocks = document.querySelectorAll("div.info");
console.log(infoBlocks);

infoBlocks[0].innerHTML = "It is my Info:"


// events

const myFunction = function(){
    infoBlocks[0].innerHTML = "Hello My name is Saule!"
}

const changeColor = function() {
    let myButton = document.getElementById("myButton");
    let myInput = document.getElementById("myInput");
    myButton.style.backgroundColor = "red";
    myInput.style.color = "#082468"
    alert("you changed my color")
}
// p {

// }

// div .my-class {

// }

// h1 {

// }

// .my-class {

// }

// h1 .my-class {

// }