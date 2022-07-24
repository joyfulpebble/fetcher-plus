import { app, BrowserWindow, Menu }        from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";

import * as fs from 'fs';
import * as path from 'path';

import getFilePath from './components/getFilePath'

function createWindow() {
  const filePath: Array<string> = [];
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
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
            getFilePath(filePath, mainWindow);
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

  if (app.isPackaged) {
    mainWindow.loadURL(`file://${__dirname}/../index.html`);
  } else {
    mainWindow.loadURL('http://localhost:3000/index.html');

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
