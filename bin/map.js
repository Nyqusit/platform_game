let inc = 0;
const scrn = document.getElementById("screen");
const scrnC = scrn.getContext('2d');
const groundBlock = document.getElementById("groundBlock")
const pipe = document.getElementById("pipe");

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

(gameLoop=(frame)=>{
    inc--;
    let scaledWidth = (width-(width-height));
    let groundBlockW = scaledWidth/10;
    let groundBlockH = height/10;
    let groundBlockY = height-groundBlockH;
    let floor = groundBlockY - groundBlockH;

    let pipeW = groundBlockW*1;
    let pipeY = groundBlockH*8;
    let pipeH = groundBlockY-pipeY;

    requestAnimationFrame(gameLoop);
    scrnC.fillStyle = "red"
    scrnC.fillRect(0,0,scrn.width,height);
    for(var i=0;i<scrn.width/groundBlockW;i++){
        scrnC.drawImage(groundBlock,inc+(i*groundBlockW),groundBlockY,groundBlockW,groundBlockH)
        if(i===4){
            scrnC.drawImage(pipe,inc+(i*groundBlockW),pipeY,pipeW,pipeH)
        }
    }
})()

