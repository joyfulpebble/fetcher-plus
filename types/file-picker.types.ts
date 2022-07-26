import { BrowserWindow } from "electron";

/* function interface */

export interface Type_GetFilePath {
  (mainWindow: BrowserWindow): string;
}

export interface Type_MenuAssemblyFunction {
  (mainWindow: BrowserWindow): Electron.Menu;
}

export interface Type_GetFileContent {
  (path: string): string;
}