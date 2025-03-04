/*
let divs = document.querySelectorAll(".image-div");


divs.forEach((div) => {
    div.addEventListener('click',() => {
        console.log("forEach worked");
        div.style.visibility = "visible";
    })
})
*/

let pie1 = document.querySelector("#pie1");
let pie2 = document.querySelector("#pie2");
let pie3 = document.querySelector("#pie3");
let pie4 = document.querySelector("#pie4");
let pie5 = document.querySelector("#pie5");
let pie6 = document.querySelector("#pie6");
let pie7 = document.querySelector("#pie7");
let pie8 = document.querySelector("#pie8");
let pie9 = document.querySelector("#pie9");




pie1.addEventListener('click', () => {
    pie3.style.visibility = "visible";
    alert("Yes")
});


pie3.addEventListener('click', () => {
    pie7.style.visibility = "visible";
    alert("I")
});


pie7.addEventListener('click', () => {
    pie2.style.visibility = "visible";
    alert("Am")
});

pie2.addEventListener('click', () => {
    pie8.style.visibility = "visible";
    alert("Now")
});

pie8.addEventListener('click', () => {
    pie9.style.visibility = "visible";
    alert("A")
});

pie9.addEventListener('click', () => {
    pie4.style.visibility = "visible";
    alert("Pie")
});

pie4.addEventListener('click', () => {
    pie6.style.visibility = "visible";
    alert("Master")
});

pie6.addEventListener('click', () => {
    pie5.style.visibility = "visible";
    alert("! ! !")
});





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






