import { app, BrowserWindow, Menu } from "electron";

import { menuAssemblyFunction }     from "../../types/file-picker.types";
import getFilePath                  from "../../src/core/file-picker/components/getFilePath";

const MenuAssemblyFunction: menuAssemblyFunction = (filePath: string[], mainWindow: BrowserWindow): any => {
  const menuAssembly = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
           label:'Open File',
           accelerator: 'Ctrl+O',
           click() {
            getFilePath(filePath, mainWindow);
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
  
  return menuAssembly
}

export default MenuAssemblyFunction;