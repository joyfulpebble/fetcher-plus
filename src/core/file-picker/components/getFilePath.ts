import { BrowserWindow, dialog } from "electron";
import { getFilePath }           from "../../../../types/file-picker.types";

const getFilePath: getFilePath = (mainWindow: BrowserWindow): string[] => {
  
  const options = {
    filters: [
      { name: 'JSON fules', extensions: ['json'] }
    ]
  };

  const files = dialog.showOpenDialogSync(mainWindow, options)

  return files!
}

export default getFilePath;