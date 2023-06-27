"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const electron_devtools_installer_1 = require("electron-devtools-installer");
const path = require("path");
function createWindow() {
	const mainWindow = new electron_1.BrowserWindow({
		width: 1400,
		height: 700,
		minWidth: 800,
		minHeight: 600,
		backgroundColor: "#1E1E1E",
		webPreferences: {
			nodeIntegration: true
		}
	});
	mainWindow.setMenuBarVisibility(false);
	mainWindow.loadURL("http://localhost:3000/home");
	mainWindow.webContents.openDevTools();
	require("electron-reload")(__dirname, {
		electron: path.join(
			__dirname,
			"node_modules",
			".bin",
			"electron" + (process.platform === "win32" ? ".cmd" : "")
		)
	});
}
electron_1.app.whenReady().then(() => {
	(0, electron_devtools_installer_1.default)(
		electron_devtools_installer_1.REACT_DEVELOPER_TOOLS
	)
		.then((name) => console.log(`Added Extension:  ${name}`))
		.catch((err) => console.log("An error occurred: ", err));
	createWindow();
	electron_1.app.on("activate", () => {
		if (electron_1.BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
	electron_1.app.on("window-all-closed", () => {
		if (process.platform !== "darwin") {
			electron_1.app.quit();
		}
	});
});
