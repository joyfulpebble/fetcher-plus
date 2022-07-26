import { app, BrowserWindow, Menu } from "electron";
import { readFileSync, promises as fsPromises } from 'fs';
import { join } from 'path';

import { menuAssemblyFunction }     from "../../types/file-picker.types";
import getFilePath                  from "../../src/core/file-picker/components/getFilePath";

function getFileContent(path: string){
  console.log(path);

  let result = readFileSync(path, 'utf-8');
  console.log(result);
  
}

const MenuAssemblyFunction: menuAssemblyFunction = (mainWindow: BrowserWindow): any => {
  const menuAssembly = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
           label:'Open File',
           accelerator: 'Ctrl+O',
           click() {
            getFileContent('C:/Users/danma/Desktop/.dev/.web/JSON/.editor/tsconfig.json'/*getFilePath(mainWindow)*/)
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