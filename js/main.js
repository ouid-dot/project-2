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
    document.querySelector("#mixingbowl").style.visibility = "visible";
    alert("Homemade or Store bought no one will ever know.");
})
document.querySelector("#mixingbowl").addEventListener("click", function(){
    document.querySelector("#cups").style.visibility = "visible";
    alert("We need somewhere to mix everthing no?");
})
document.querySelector("#cups").addEventListener("click", function(){
    document.querySelector("#rollingpin").style.visibility = "visible";
    alert("Ah yes the good ol' measuring cup to make sure we are accurate as possible!");
})
document.querySelector("#rollingpin").addEventListener("click", function(){
    document.querySelector("#piepan").style.visibility = "visible";
    alert("I have no idea what this is for");
})
document.querySelector("#piepan").addEventListener("click", function(){
    document.querySelector("#spatula").style.visibility = "visible";
    alert("Cannot foget the pie pan! (neva eva neva)");
})
document.querySelector("#spatula").addEventListener("click", function(){
    document.querySelector("#temp").style.visibility = "visible";
    alert("Okay I may have forgotten the spatula and whisk inside of the drawer");
})
document.querySelector("#temp").addEventListener("click", function(){
    document.querySelector("#time").style.visibility = "visible";
    alert("Okay this one is simple. We only need to preheat the oven to 275°, and make sure we don't burn the house down again.");
})
document.querySelector("#time").addEventListener("click", function(){
    document.querySelector("#piegrab").style.visibility = "visible";
    alert("This should only take 25-30 minutes from what this online recipe told me.");
})
document.querySelector("#piegrab").addEventListener("click", function(){
    document.querySelector("#piegrab").style.visibility = "visible";
    alert("That sounds like the timer. Let me grab this pie and try it now.");
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






