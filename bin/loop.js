let playerX = 0;
(gameLoop=(frame)=>{
    Map.init();
    Controls.init()
    scrnC.fillStyle = "red"
    scrnC.fillRect(0,0,scrn.width,height);

    let {blockH,blockW,G_BDiv} = Map;

    let is_endOfMap = Map.end <= inc*-1+Swidth;
    let is_startOfMap = inc >= 1;
    let hitStartOfMap = playerX*-1+(Player.width/2) >= Swidth/2;
    let hitEndOfMap = (inc*-1)+playerX+Swidth/2+(Player.width/2)>= Map.end;
    if(Controls.right){
        if(!is_endOfMap && playerX >= 0){
            inc-=blockW*.0625;
            playerX>0?playerX=0:null;
        }else{
            if(!hitEndOfMap){
                playerX+=blockW*.0625;
            }
        }
    }

    if(Controls.left){
        if(!is_startOfMap && playerX <= 1){
            inc+=blockW*.0625;
            playerX<0?playerX=0:null;
        }else{
            if(!hitStartOfMap){
                playerX-=blockW*.0625;
            }
        }
    }
    for(scroll = 0;scroll<scrn.width/Map.blockW;scroll++){


    Map.init();
        {//Map
            mapOne();
            Player.draw(playerX,3,1,1);
        }//Map end

    }
    requestAnimationFrame(gameLoop);
})()

