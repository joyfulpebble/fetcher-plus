import { BrowserWindow, dialog } from "electron";
import { getFilePath }           from "../../../../types/file-picker.types";

const getFilePath: getFilePath = (mainWindow: BrowserWindow): any => {
  
  const options = {
    filters: [
      { name: 'JSON fules', extensions: ['json'] }
    ]
  };

  const files = dialog.showOpenDialogSync(mainWindow, options)

  console.log(files![0]);
  
  return files![0]
}

export default getFilePath;