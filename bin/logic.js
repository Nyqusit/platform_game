
function playerMovement(){
    let {isWithinObjectWidth} = CollisionDetection;
    let {hitObjectToRight,hitObjectToLeft} = CollisionDetection.player;
    //controls
    const {is_endOfMap,is_startOfMap,hitStartOfMap,hitEndOfMap,blockW} = Map;
    if(Controls.right & !hitObjectToRight){
        if(!is_endOfMap && playerX >= 0){
            inc-=blockW*.0625;
            playerX>0?playerX=0:null;
        }else{
            if(!hitEndOfMap){
                playerX+=blockW*.0625;
            }
        }
    }

    if(Controls.left & !hitObjectToLeft){
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
    //
    console.log(hitObjectToRight);
}
