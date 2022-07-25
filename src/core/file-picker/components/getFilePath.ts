import { BrowserWindow, dialog } from "electron";
import { getFilePath }           from "../../../../types/file-picker.types";

import * as fs from 'fs'

const getFilePath: getFilePath = (path: Array<string>, mainWindow: BrowserWindow): string[] => {
  let filePath: string[] = [];

  const files = dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      { name: 'JSON fules', extensions: ['json'] }
    ]
  })
    .then(result => {
      filePath = result.filePaths;
      path?.push(filePath[0]);

      console.log(path);

      const fileContent = fs.readFileSync(filePath[0]).toString();
      console.log(fileContent); 
    }).catch(err => {
      console.log(err);
    });
    
  if (!files) {
    alert(`You don't pick a file!`);
  }
    
  return path;
}

export default getFilePath;