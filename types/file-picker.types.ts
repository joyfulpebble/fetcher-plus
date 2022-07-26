import { BrowserWindow } from "electron";

/* function interface */

export interface getFilePath {
  (mainWindow: BrowserWindow): string[]
}

export interface menuAssemblyFunction {
  (mainWindow: BrowserWindow): any
}