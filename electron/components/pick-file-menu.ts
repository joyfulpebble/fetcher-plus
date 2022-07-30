import { BrowserWindow } from "electron";

function pickFile(){
  const popup = new BrowserWindow({
    width: 500,
    height: 300,
    frame: false,
    modal: true
  });

  popup.on('show', () => { 
    popup.loadURL('http://localhost:3000/pick-file');
    popup.focus();

    popup.on('blur', () => {
      popup.close()
    })
  });
  
  popup.show();
}

export default pickFile