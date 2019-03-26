(gameLoop=(frame)=>{
    Map.init();
    Controls.init()
    scrnC.fillStyle = "blue"
    scrnC.fillRect(0,0,scrn.width,height);
    let {blockH,blockW,G_BDiv} = Map;
    //Player.y = 0;

    for(scroll = 0;scroll<scrn.width/Map.blockW;scroll++){

    //Map.init();
        {//Map
            mapOne();
        }//Map end

    }
            Player.draw(playerX,3,1,1);
    playerMovement();
   // console.log(CollisionDetection.isWithinObjectTopWidth)
    CollisionDetection.init();
    requestAnimationFrame(gameLoop);
})()

