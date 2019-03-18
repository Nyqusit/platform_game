(gameLoop=(frame)=>{
    Map.init();
    Controls.init()
    scrnC.fillStyle = "red"
    scrnC.fillRect(0,0,scrn.width,height);

    let {blockH,blockW,G_BDiv} = Map;
    //let is_endOfMap = (inc-blockW*10)*-1 >= scrn.width;
    //let is_endOfMap = blockW*21 <= inc*-1+width;
    let is_endOfMap = Map.end <= inc*-1+width;
    //is_endOfMap = false;
    if(!is_endOfMap){
        inc-=blockW*.03125;
    }
    for(scroll = 0;scroll<scrn.width/Map.blockW;scroll++){

    Map.init();
        {//Map
            mapOne();
           //scrnC.drawImage(player,width/2-(blockW/2),height-blockH*4,blockW,blockH*2)
            Map.drawPlayer(3,1,1);
            //console.log(Map.objectAreas[0])
           //console.log(Map.objectAreas[0])
            //console.log(Map.groundAreas)
            //console.log(blockW*20,inc*-1+width)
            console.log(Map.end)
        }//Map end

    }
    requestAnimationFrame(gameLoop);
})()

