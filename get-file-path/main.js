const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron');
const { fs } = require('fs')

app.whenReady().then(function() {

  const path = null;
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  const menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
           label:'Open File',
           accelerator: 'Ctrl+O',
           click() {
              // dialog.showOpenDialog({
              //   properties: ['openFile']
              // })
              // .then(function(fileObj) {
              //    if (!fileObj.canceled) {
              //      mainWindow.webContents.send('FILE_OPEN', fileObj.filePaths)
              //    }
              // })
              // .catch(function(err) {
              //    console.error(err)  
              // })
              openFile();
           } 
       },
       {
           label:'Exit',
           click() {
              app.quit()
           } 
         }
      ]
    }
  ])
  Menu.setApplicationMenu(menu)

  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.webContents.openDevTools();
  mainWindow.show()

  function openFile(p) {

    const files = dialog.showOpenDialog(mainWindow, {
      properties: ['openFile'],
      filters: [
        { name: 'All Files', extensions: ['*'] }
      ]
    })
    .then(result => {
      // console.log(result.canceled)
      p = result.filePaths;
      console.log(p)
    }).catch(err => {
      console.log(err)
    })
  
    if(!files) return;
  
    // const file = files[0]
    // const fileCon = fs.readFileSync(file).toString()
  
    return p;
  }


})
