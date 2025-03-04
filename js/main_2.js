/*
let divs = document.querySelectorAll(".image-div");


divs.forEach((div) => {
    div.addEventListener('click',() => {
        console.log("forEach worked");
        div.style.visibility = "visible";
    })
})
*/

document.querySelector("#mixingbowl").addEventListener("click", function(){
    document.querySelector("#cups").style.visibility = "visible";
    alert("We need somewhere to mix everthing no?");
})
document.querySelector("#cups").addEventListener("click", function(){
    document.querySelector("#rollingpin").style.visibility = "visible";
    alert("Ah yes the good ol measuring cup to make sure we are accurate as possible!");
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
    document.querySelector("#spatula").style.visibility = "visible";
    alert("Okay I may have forgotten the spatula and whisk inside of the drawer");
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






