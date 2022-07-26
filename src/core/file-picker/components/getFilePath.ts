import { BrowserWindow, dialog } from "electron";
import { Type_GetFilePath }      from "../../../../types/file-picker.types";

const getFilePath: Type_GetFilePath = (mainWindow: BrowserWindow): string => {
  
  const options = {
    filters: [
      { name: 'JSON fules', extensions: ['json'] }
    ]
  };

  const files = dialog.showOpenDialogSync(mainWindow, options)
  
  return files![0];
}

export default getFilePath;