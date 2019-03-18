let Controls = {};
Controls.right = false;
Controls.left = false;
Controls.z = false;
Controls.s = false;

Controls.init =  function() {
  let keyDetectLeft = false;
  let keyDetectRight = false;
  document.onkeydown = (evt)=>{
    if(evt.keyCode===39){
      keyDetectRight = true;
      Controls.right =true;
      Controls.left =false;
    };
  if(evt.keyCode===37){
    keyDetectLeft = true;
    Controls.left =true;
    Controls.right = false;
    };
    Controls.z  = evt.keyCode === 90;
    Controls.s = evt.keyCode === 83;
    Controls.x = evt.keyCode ===88;
  }

  document.onkeyup = (evt)=>{
      if(evt.keyCode===39 ){
      keyDetectRight = false;
        if(keyDetectLeft){
          Controls.left = true;
          Controls.right =false;
        }else{
          Controls.right =false;
        }
      };
      if(evt.keyCode===37){
        keyDetectLeft = false;
        if(keyDetectRight){
          Controls.right = true;
          Controls.left =false;
        }else{
          Controls.left =false;
        }
      };

      Controls.z  = !evt.keyCode === 90;
      Controls.s = !evt.keyCode === 83;
      Controls.x = !evt.keyCode ===88;
    }
}
