const {app,BrowserWindow,Menu} = require('electron');

let mainWindow

let ratio = 900;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: ratio,
    height: ratio,
    fullscreen:false,
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



























