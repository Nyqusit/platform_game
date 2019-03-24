let inc = 0;
let Scroll=0;
const scrn = document.getElementById("screen");
const scrnC = scrn.getContext('2d');
const groundBlock = document.getElementById("groundBlock")
const pipe = document.getElementById("pipe");
const itemBlock = document.getElementById("itemBlock");
const player = document.getElementById("player");

let height = window.innerHeight -7;
let width = window.innerWidth -7;
let Swidth = width-(width-height)

scrn.height = height;
scrn.width = width*10;

window.onresize = () =>{
    height = window.innerHeight -7;
    width = window.innerWidth -7;
    scrn.width = width*10;
    scrn.height = height;

}
