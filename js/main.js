/*
let divs = document.querySelectorAll(".image-div");


divs.forEach((div) => {
    div.addEventListener('click',() => {
        console.log("forEach worked");
        div.style.visibility = "visible";
    })
})
*/

document.querySelector("#eggs").addEventListener("click", function(){
    document.querySelector("#sugar").style.visibility = "visible";
    alert("Ahh yes only the egg yolks. Get rid of those nasty egg whites!");
})
document.querySelector("#sugar").addEventListener("click", function(){
    document.querySelector("#bananas").style.visibility = "visible";
    alert("Now we need to sweeten things up a bit yes? Don't be shy add some more.");
})
document.querySelector("#bananas").addEventListener("click", function(){
    document.querySelector("#butter").style.visibility = "visible";
    alert("Cant forget the bananas!");
})
document.querySelector("#butter").addEventListener("click", function(){
    document.querySelector("#salt").style.visibility = "visible";
    alert("Butter...");
})
document.querySelector("#salt").addEventListener("click", function(){
    document.querySelector("#vanilla").style.visibility = "visible";
    alert("Now we need some of that tasty salt from the sea! (or mines)");
})
document.querySelector("#vanilla").addEventListener("click", function(){
    document.querySelector("#milk").style.visibility = "visible";
    alert("A lil more sweetness couldn't hurt anyone. (right?)");
})
document.querySelector("#milk").addEventListener("click", function(){
    document.querySelector("#flour").style.visibility = "visible";
    alert("Only the freshest cow juice in this recipe!!!");
})
document.querySelector("#flour").addEventListener("click", function(){
    document.querySelector("#piecrust").style.visibility = "visible";
    alert("A required ingredient but honestly I have no idea why.");
})
document.querySelector("#piecrust").addEventListener("click", function(){
    document.querySelector("#piecrust").style.visibility = "visible";
    alert("Homemade or Store bought no one will ever know.");
})































/*
console.log("hello hello");
// javascript timeout timer changes title color

let pageTitle = document.querySelector("#page-title");
let header = document.querySelector("header");


setTimeout(function(){
    pageTitle.style.color = "pink";
    //console.log("timeout worked!")
} ,3000 );

//click event on header changes background color
header.onclick = function(){
    //console.log("clicked header")
    document.querySelector("body").style.backgroundColor = "black"
}
 */






