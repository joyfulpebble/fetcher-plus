import { app, BrowserWindow }      from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";

import * as path from 'path';
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 700,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: '#1E1E1E',
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.setMenuBarVisibility(false)
  mainWindow.loadURL('http://localhost:3000/welcome');
  mainWindow.webContents.openDevTools();

  require('electron-reload')(__dirname, {
    electron: path.join(__dirname,
      'node_modules',
      '.bin',
      'electron' + (process.platform === "win32" ? ".cmd" : ""))
  });
}


app.whenReady().then(() => {
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err)); 

  createWindow();
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

});
