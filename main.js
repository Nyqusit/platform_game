const {app,BrowserWindow,Menu} = require('electron');

let mainWindow
// 16:9
// 64  = 1024 x 576
// 72  = 1152 x 684
// 80  = 1280 x 720
// 85  = 1366 x 768
// 100 = 1600 x 900
// 120 = 1920 x 1080

//16:10
//80  = 1280 x 800
//90  = 1440 x 900
//105 = 1680 x 1050
//120 = 1920 x 1200
//160 = 2560 x 1600
function setScrnSize(w,h,factor){
    width = w*factor;
    height = h*factor;
}

setScrnSize(16,9,72);

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    fullscreen:false,
    frame:false,
    webPreferences: {
      nodeIntegration: true
    }
  })

//    mainWindow.setFullScreen(true);
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  //mainWindow.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}


app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
























