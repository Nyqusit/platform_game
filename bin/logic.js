
function playerMovement(){
    //controls
    const {is_endOfMap,is_startOfMap,hitStartOfMap,hitEndOfMap,blockW} = Map;
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
    //controls
}
