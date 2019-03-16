(gameLoop=(frame)=>{
    inc--;
    Map.init();

    scrnC.fillStyle = "red"
    scrnC.fillRect(0,0,scrn.width,height);

    let {blockH,blockW,G_BDiv,scaledWidth} = Map;

    for(scroll = 0;scroll<scrn.width/Map.blockW;scroll++){

    Map.init();
        {//Map
            let groundBlockY = height-blockH;
            scrnC.drawImage(groundBlock,inc+(scroll*blockW),groundBlockY,blockW,blockH)
            Map.drawObj(pipe,11,7,1,1)
            Map.drawObj(itemBlock,10,7,1,1)
            //console.log(Map.objectAreas[0])

        }//Map end

    }
           console.log(Map.objectAreas)
    requestAnimationFrame(gameLoop);
})()

