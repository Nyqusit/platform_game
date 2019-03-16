(gameLoop=(frame)=>{
    inc--;
    Map.init();
    {   //Map

        let {blockH,blockW} = Map;

        let groundBlockY = height-blockH;

        requestAnimationFrame(gameLoop);
        scrnC.fillStyle = "red"
        scrnC.fillRect(0,0,scrn.width,height);

        for(scroll = 0;scroll<scrn.width/blockW;scroll++){

            scrnC.drawImage(groundBlock,inc+(scroll*blockW),groundBlockY,blockW,blockH)

            Map.drawObj(pipe,10,8,1,1)
            Map.drawObj(itemBlock,10,7,1,1)
        }
    } //Map end
})()

