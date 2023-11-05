'use strict'

const { assert } = require("console")
// Import parts of electron to use
const electron = require("electron")
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Keep a reference for dev mode
let dev = false

// Broken:
// if (process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath)) {
//   dev = true
// }

if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development') {
  dev = true
}

// Temporary fix broken high-dpi scale factor on Windows (125% scaling)
// info: https://github.com/electron/electron/issues/9691
if (process.platform === 'win32') {
  app.commandLine.appendSwitch('high-dpi-support', 'true')
  app.commandLine.appendSwitch('force-device-scale-factor', '1')
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    // height: 95,
    // width: 95,
    transparent: true,
    frame: false,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    resizable: false,
  })

  mainWindow.removeMenu()
  // mainWindow.setAlwaysOnTop(true, 'floating')

  // and load the index.html of the app.
  let indexPath

  if (dev && process.argv.indexOf('--noDevServer') === -1) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: '/',
      slashes: true
    })
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', '/'),
      slashes: true
    })
  }

  mainWindow.loadURL(indexPath)

  // Don't show until we are ready and loaded
  mainWindow.once('ready-to-show', () => {
    var screenElectron = electron.screen;
    var mainScreen = screenElectron.getPrimaryDisplay();
    var dimensions = mainScreen.size;

    let sw = dimensions.width
    let sh = dimensions.height
    // mainWindow.setPosition(sw - 100, sh / 2 - 50)
    mainWindow.show()

    // Open the DevTools automatically if developing
    if (dev) {
      const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')

      installExtension(REACT_DEVELOPER_TOOLS)
        .catch(err => console.log('Error loading React DevTools: ', err))
      mainWindow.webContents.openDevTools()
    }
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)



ipcMain.on('button_page_rendered', (event, arg) => {
  //execute tasks on behalf of renderer process 
  var screenElectron = electron.screen;
  var mainScreen = screenElectron.getPrimaryDisplay();
  var dimensions = mainScreen.size;

  let sw = dimensions.width
  let sh = dimensions.height
  // mainWindow.setPosition(sw / 2 - 150, sh / 2 - 150)
  // mainWindow.setSize(320, 320);
  // mainWindow.setAlwaysOnTop(false)
})

ipcMain.on('home_page_rendered', () => {
  mainWindow.unmaximize();
  var screenElectron = electron.screen;
  var mainScreen = screenElectron.getPrimaryDisplay();
  var dimensions = mainScreen.size;

  let sw = dimensions.width;
  let sh = dimensions.height;
  mainWindow.setPosition(sw - 90, sh / 2 - 50);
  mainWindow.setSize(100, 100);
  // mainWindow.setAlwaysOnTop(true, 'floating')
})

ipcMain.on('priv_mgmnt_rendered', () => {
  var screenElectron = electron.screen;
  var mainScreen = screenElectron.getPrimaryDisplay();
  var dimensions = mainScreen.size;

  let sw = dimensions.width;
  let sh = dimensions.height;
  // mainWindow.setPosition(sw / 2 - 300, sh / 2 - 200);
  // mainWindow.setSize(800, 800);
  // mainWindow.setAlwaysOnTop(true, 'floating')
})

ipcMain.on('face_ai_rendered', () => {
  var screenElectron = electron.screen;
  var mainScreen = screenElectron.getPrimaryDisplay();
  var dimensions = mainScreen.size;

  let sw = dimensions.width;
  let sh = dimensions.height;
  mainWindow.setPosition(sw / 2 - 300, sh / 2 - 200);
  // mainWindow.setSize(800, 800);
  // mainWindow.setAlwaysOnTop(true, 'floating')
})




ipcMain.on('windowMoving', (e, { mouseX, mouseY }) => {
  const { x, y } = electron.screen.getCursorScreenPoint()
  mainWindow.setPosition(x - mouseX, y - mouseY)
});


// ipcMain.on('windowMoved', () => {
//   var button = document.getElementById("home_button");
//   button.backgroundImage();
// });



// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
