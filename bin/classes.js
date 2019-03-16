const Map = {
    init:function(){
        this.G_BDiv = 10;
        this.scaledWidth = (width-(width-height));
        this.blockW = this.scaledWidth/this.G_BDiv;
        this.blockH = height/this.G_BDiv;
        this.groundBlockY = height-this.blockH;
    },
    gridClac:function(x,y,w,h){
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
        let Pos = this.gridClac(x,y,w,h);
            if(scroll === Pos.X){
                scrnC.drawImage(obj,inc+(scroll*this.blockW),Pos.Y,Pos.W,Pos.H)
        }
    },
}
