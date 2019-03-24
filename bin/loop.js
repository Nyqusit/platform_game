(gameLoop=(frame)=>{
    Map.init();
    Controls.init()
    scrnC.fillStyle = "red"
    scrnC.fillRect(0,0,scrn.width,height);

    let {blockH,blockW,G_BDiv} = Map;

    playerMovement();
    for(scroll = 0;scroll<scrn.width/Map.blockW;scroll++){

    Map.init();
        {//Map
            mapOne();
            Player.draw(playerX,3,1,1);
            //console.log(Player.feet)
        }//Map end

    }
    console.log(Player.area,blockW)
    requestAnimationFrame(gameLoop);
})()

