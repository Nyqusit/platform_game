const {app,BrowserWindow,Menu} = require('electron');

let mainWindow


function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 200,
    height: 200,
    fulllscreen:true,
    webPreferences: {
      nodeIntegration: true
    }
  })

//    mainWindow.setFullScreen(true);

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindowwebContents.openDevTools()

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



























