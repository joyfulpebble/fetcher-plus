import { BrowserWindow, dialog } from "electron";
import { filePath } from "../electron-types/electron-types";

const getFilePath: filePath = (path: Array<string>, mainWindow: BrowserWindow): string[] => {
  const files = dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      { name: 'JSON fules', extensions: ['json'] }
    ]
  })
    .then(result => {
      let filePath: string[] = result.filePaths;
      path?.push(filePath[0]);

      console.log(path);
    }).catch(err => {
      console.log(err);
    });

  if (!files) {
    alert(`You don't pick a file!`);
  }

  return path;
}

export default getFilePath;