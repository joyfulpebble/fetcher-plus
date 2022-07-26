import { app, BrowserWindow, Menu } from "electron";

import { Type_MenuAssemblyFunction }from "../../types/file-picker.types";
import getFilePath                  from "../../src/core/file-picker/components/getFilePath";
import getFileContent               from "../../src/core/file-picker/components/getFileContent"

const MenuAssemblyFunction: Type_MenuAssemblyFunction = (mainWindow: BrowserWindow): Electron.Menu => {
  const menuAssembly = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
           label:'Open File',
           accelerator: 'Ctrl+O',
           click() {
            getFileContent(getFilePath(mainWindow))
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