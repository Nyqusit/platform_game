let inc = 0;
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

(gameLoop=(frame)=>{
    inc--;
    let G_BDiv = 10;
    let scaledWidth = (width-(width-height));
    let blockW = scaledWidth/G_BDiv;
    let blockH = height/G_BDiv;
    let groundBlockY = height-blockH;

    requestAnimationFrame(gameLoop);
    scrnC.fillStyle = "red"
    scrnC.fillRect(0,0,scrn.width,height);

    for(var i=0;i<scrn.width/blockW;i++){
        function gridClac(x,y,w,h){
            let grid = {
                X : x,
                Y : blockH*((y-G_BDiv)*-1),
                W : blockW*w,
                H : height-(blockH*((h-G_BDiv)*-1))
            };
            return grid;
        };

        function drawObj(obj,x,y,w,h){
            let Pos = gridClac(x,y,w,h);
            if(i === Pos.X){
                scrnC.drawImage(obj,inc+(i*blockW),Pos.Y,Pos.W,Pos.H)
            }
        }

        scrnC.drawImage(groundBlock,inc+(i*blockW),groundBlockY,blockW,blockH)

        drawObj(pipe,10,8,1,1)
        drawObj(itemBlock,10,7,1,1)
    }
})()

