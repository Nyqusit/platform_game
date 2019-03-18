let playerX = 0;
(gameLoop=(frame)=>{
    Map.init();
    Controls.init()
    scrnC.fillStyle = "red"
    scrnC.fillRect(0,0,scrn.width,height);

    let {blockH,blockW,G_BDiv} = Map;

    let is_endOfMap = Map.end <= inc*-1+width;
    let is_startOfMap = inc >= 1;

    //logic
    if(!is_endOfMap){
        if(Controls.right && playerX >= -1 ){
            inc-=blockW*.0625;
        }
    }else{
        if(Controls.right){
           playerX+=blockW*.0625;
        }
        if(Controls.left && playerX >= 0){
            playerX-=blockW*.0625;
        }
    }
    if(!is_startOfMap){
        if(Controls.left && playerX <= 1){
            inc+=blockW*.0625;
        }
    }else{
        if(Controls.left){
            playerX-=blockW*.0625;
        }
        if(Controls.right && playerX <= 0){
            playerX+=blockW*.0625;
        }
    }
    for(scroll = 0;scroll<scrn.width/Map.blockW;scroll++){

    Map.init();
        {//Map
            mapOne();
            Map.drawPlayer(playerX,3,1,1);
            console.log(Controls.right)
        }//Map end

    }
    requestAnimationFrame(gameLoop);
})()

