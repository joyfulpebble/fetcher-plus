import { BrowserWindow } from "electron";

/* function interface */

export interface filePath {
  (path: string[], mainWindow: BrowserWindow): string[]
}