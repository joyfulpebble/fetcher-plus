import { BrowserWindow } from "electron";

/* function interface */

export interface getFilePath {
  (mainWindow: BrowserWindow): any
}

export interface menuAssemblyFunction {
  (mainWindow: BrowserWindow): any
}