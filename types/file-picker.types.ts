import { BrowserWindow } from "electron";

/* function interface */

export interface getFilePath {
  (path: string[], mainWindow: BrowserWindow): string[]
}

export interface menuAssemblyFunction {
  (path: string[], mainWindow: BrowserWindow): any
}