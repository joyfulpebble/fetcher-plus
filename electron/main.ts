import { app, BrowserWindow }                      from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from "electron-devtools-installer";

import * as path from 'path';

const DEVTOOLS_ARRAY = [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS];

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL('http://localhost:3000/welcome');

  mainWindow.webContents.openDevTools();

  require('electron-reload')(__dirname, {
    electron: path.join(__dirname,
      '..',
      '..',
      'node_modules',
      '.bin',
      'electron' + (process.platform === "win32" ? ".cmd" : "")),
    forceHardReset: true,
    hardResetMethod: 'exit'
  });
}


app.whenReady().then(() => {
  for (let i = 0; i < DEVTOOLS_ARRAY.length; i++) {
    installExtension(DEVTOOLS_ARRAY[i])
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));    
  }

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
