import { app, BrowserWindow, Menu } from "electron";

import { Type_MenuAssemblyFunction }from "../../types/file-picker.types";
import pickFile from "./pick-file-menu";

const MenuAssemblyFunction: Type_MenuAssemblyFunction = (): Electron.Menu => {
  const menuAssembly = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
           label:'Open File',
           accelerator: 'Ctrl+O',
           click() {
            pickFile()
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
  
  return menuAssembly;
}

export default MenuAssemblyFunction;