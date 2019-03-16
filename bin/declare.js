let inc = 0;
let Scroll=0;
const scrn = document.getElementById("screen");
const scrnC = scrn.getContext('2d');
const groundBlock = document.getElementById("groundBlock")
const pipe = document.getElementById("pipe");
const itemBlock = document.getElementById("itemBlock");

let height = window.innerHeight -7;
let width = window.innerWidth -7;

scrn.height = height;
scrn.width = width+1000;

window.onresize = () =>{
    height = window.innerHeight -7;
    width = window.innerWidth -7;
    scrn.width = width+1000;
    scrn.height = height;

}
