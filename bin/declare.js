let inc = 0;
let Scroll=0;
let playerX = 0;
const scrn = document.getElementById("screen");
const scrnC = scrn.getContext('2d');
const groundBlock = document.getElementById("groundBlock")
const pipe = document.getElementById("pipe");
const itemBlock = document.getElementById("itemBlock");
const player = document.getElementById("player");
const tileMap = document.getElementById("tileMap");

let height = window.innerHeight;
let width = window.innerWidth;
let Swidth = width-(width-height)

scrn.height = height;
scrn.width = width*10;

window.onresize = () =>{
    height = window.innerHeight;
    width = window.innerWidth;
    scrn.width = width*10;
    scrn.height = height;
    location.reload();
}
