"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var electron_devtools_installer_1 = require("electron-devtools-installer");
var path = require("path");
var window_menu_1 = require("./components/window-menu");
function createWindow() {
    var mainWindow = new electron_1.BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            nodeIntegration: true
        }
    });
    electron_1.Menu.setApplicationMenu((0, window_menu_1.default)(mainWindow));
    if (electron_1.app.isPackaged) {
        mainWindow.loadURL("file://".concat(__dirname, "/../index.html"));
    }
    else {
        mainWindow.loadURL('http://localhost:3000/index.html');
        mainWindow.webContents.openDevTools();
        require('electron-reload')(__dirname, {
            electron: path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron' + (process.platform === "win32" ? ".cmd" : "")),
            forceHardReset: true,
            hardResetMethod: 'exit'
        });
    }
}
electron_1.app.whenReady().then(function () {
    (0, electron_devtools_installer_1.default)(electron_devtools_installer_1.REACT_DEVELOPER_TOOLS)
        .then(function (name) { return console.log("Added Extension:  ".concat(name)); })
        .catch(function (err) { return console.log('An error occurred: ', err); });
    createWindow();
    electron_1.app.on('activate', function () {
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
    electron_1.app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            electron_1.app.quit();
        }
    });
});
//# sourceMappingURL=main.js.map