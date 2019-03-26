
function playerMovement(){
    let {isWithinObjectWidth} = CollisionDetection;
    let {hitObjectToRight,hitObjectToLeft,hitObjectAbove,hitObjectBellow} = CollisionDetection.player;
    let {jumpHeight, y} = Player;
    //controls
    const {is_endOfMap,is_startOfMap,hitStartOfMap,hitEndOfMap,blockW} = Map;
    //console.log(!CollisionDetection.ground.hitObjectToRight)
    if(Controls.right && !hitObjectToRight){
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
    //console.log(Player.area.bottom,Map.groundHeight)
    //jump
    if(Controls.z && !hitObjectAbove && y <= jumpHeight || Player.isJumping && !hitObjectAbove){
        Player.jump();
    }else{
    }

    if(!Player.isJumping && !hitObjectBellow || hitObjectAbove){

        Player.fall();
        Controls.z = false;
    }
    //controls
    //
    //console.log(Map.groundHeight,Player.area.bottom,Player.isJumping);
}
