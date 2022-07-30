import { BrowserWindow } from "electron";

/* function interface */

export interface Type_GetFilePath {
  (window: BrowserWindow): string;
}

export interface Type_MenuAssemblyFunction {
  (): Electron.Menu;
}

export interface Type_GetFileContent {
  (path: string): string;
}