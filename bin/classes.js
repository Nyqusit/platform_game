const Map = {
    init:function(){
        this.objectAreas = [];
        this.groundArea =[];
        this.G_BDiv = 10;
        this.scaledWidth = (width-(width-height));
        this.blockW = this.scaledWidth/this.G_BDiv;
        this.blockH = height/this.G_BDiv;
        this.groundBlockY = height-this.blockH;
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
        }
        this.objectAreas.push([inc+(scroll*this.blockW),cords.Y,cords.W,cords.H]);
    },
}
