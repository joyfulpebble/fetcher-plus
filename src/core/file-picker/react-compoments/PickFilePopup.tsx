import { BrowserWindow } from "electron";
import React, { useState } from 'react'
import getFileContent from '../components/getFileContent';
import getFilePath from '../components/getFilePath';

function PickFilePopup(): any {

  const [file, setFile] = useState('none')

  const showFile = (e: any) => {
    e.preventDefault();

    const result = getFileContent(getFilePath(new BrowserWindow))

    setFile(result)
    
    console.log(file);
  
  };

  return (
    <div>
      <input type="file" onChange={showFile} />
    </div>
  );
}

export default PickFilePopup