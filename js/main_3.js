/*
let divs = document.querySelectorAll(".image-div");


divs.forEach((div) => {
    div.addEventListener('click',() => {
        console.log("forEach worked");
        div.style.visibility = "visible";
    })
})
*/

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






