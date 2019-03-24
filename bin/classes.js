const Map = {
    init:function(){
        this.objectAreas = [];
        this.groundAreas = [];
        this.G_BDiv = 10;
        this.blockW = Swidth/this.G_BDiv;
        this.blockH = height/this.G_BDiv;
        this.groundBlockY = height-this.blockH;
        this.is_endOfMap = this.end <= inc*-1+Swidth;
        this.is_startOfMap = inc >= 1;
        this.hitStartOfMap = playerX*-1+(Player.width/2) >= Swidth/2;
        this.hitEndOfMap = (inc*-1)+playerX+Swidth/2+(Player.width/2)>= this.end;
    },
    gridCalc:function(x,y,w,h){
        let {G_BDiv,blockH,blockW} = this;
        let grid = {
                X : x,
                Y : blockH*((y-G_BDiv)*-1),
                W : blockW*w,
                H : height-(blockH*((h-G_BDiv)*-1))
            };
            return grid;
    },
    drawObj:function(obj,x,y,w,h){
        let cords = this.gridCalc(x,y,w,h);
        if(scroll === cords.X){
            scrnC.drawImage(obj,inc+(scroll*this.blockW),cords.Y,cords.W,cords.H)
            this.objectAreas.push([inc+(scroll*this.blockW),cords.Y,cords.W,cords.H]);
        }
    },
    drawGround:function(obj,start,end,y,w,h){
        let {blockH,blockW} = this;
        this.end =  blockW*(end+1);
        if(scroll >= start && scroll <= end){
            scrnC.drawImage(obj,inc+(scroll*blockW),height-blockH*y,blockW*w,blockH*h)
            this.groundAreas.push([inc+(scroll*blockW),height-blockH*y,blockW*w,blockH*h])
        }
    },
}

const Player = {
    draw:function(x,y,w,h){
        let {blockW,blockH} = Map;
        this.area = {};
        this.area.left = Swidth/2-(blockW/2)+x;
        this.area.right = (Swidth/2-(blockW/2)+x) + blockW*w;
        this.area.top = height-blockH*y;
        this.area.bottom = height-blockH*y + blockH*h;
        this.width = blockW*w;
        scrnC.drawImage(player,Swidth/2-(blockW/2)+x,height-blockH*y,blockW*w,blockH*h)
    }
}

const CollisionDetection = {
    player:{
        testOne:true,
        testTwo:true,
//        hitObjectToRight:false
    },
    enemy:{

    },
    getBoundaries:function(item){
        this.bottom = item[1] + item[3], this.top = item[1], this.left = item[0], this.right = item[0]+item[2],
        this.midX = item[0]+(item[3]/2), this.midY = item[1]-(item[3]/2);
    },
    getLogicOf:function(area){
        let {left, right, top, bottom} = area;
        this.isObjectGrounded = Map.groundHeight<=this.bottom;
        this.isWithinObjectWidth = left <= this.right && right >= this.left;
        this.isWithinObjectHeight = top<=this.bottom && bottom>=this.top+5;
        this.isAboveObject = this.top >= bottom;
        this.isBellowObject = bottom >= this.bottom;
        this.isWithinObjectTopWidth = left+5 <= this.right && right-5 >= this.left;
    },
    getCollisionOf:function(area,who){
        let {left, right, top, bottom} = area;
        if(this.isWithinObjectTopWidth && this.isObjectGrounded && !this.isAboveObject){
            who.hitObjectBellow = true;
        }
        if(this.isWithinObjectWidth){
            if(this.isObjectGrounded){
                if(this.top +5 <= bottom && this.isWithinObjectWidth){
                    who.hitObjectToLeft = left <= this.right && right >= this.right;
                    who.hitObjectToRight = right >= this.left && left <= this.left;
                }
            }else{
                if(bottom >= this.top && top <= this.bottom && this.isWithinObjectHeight){
                    who.hitObjectToLeft = left <= this.right && right >= this.right;
                    who.hitObjectToRight = right >= this.left && left <= this.left;
                }
                if(top<=this.bottom && top >= this.top){
                    who.hitObjectAbove= true;
                }
                if(this.top  <= bottom && this.isWithinObjectTopWidth && !this.isAboveObject && !this.isBellowObject){
                    who.hitObjectBellow = true;
                }
            }
        }
   },

    init:function(){
        //sets all future player values to false
        Object.keys(this.player).forEach((key)=>{
            this.player[key] = false;
            //console.log(typeof key)
        })
        Map.objectAreas.forEach((obj,obj_idx)=>{
            this.getBoundaries(obj)
            this.getLogicOf(Player.area)
            this.getCollisionOf(Player.area,this.player)
            //console.log(obj)
        })
    }
}
