import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FileSaver from 'file-saver';
import getAllStorage from '../core/tools/getAllStorage';
import getMethodHandling from '../core/tools/getMethodHandling';

import EditorWithGetContent from './components/editor-with-get-content/EditorWithGetContent';
import StatusBar from './components/status-bar/StatusBar';
import Service from '../core/API/Service';

//'https://jsonplaceholder.typicode.com/posts'
function Workspace(): JSX.Element {
  const [tempErrorStorage, setTempErrorStorage] = useState<undefined | any[]>(undefined);

  const storageData: any[] = getAllStorage(sessionStorage);
  const parsedData: any    = JSON.parse(storageData[0]);  
  
  let params: object = parsedData.params;
  let url: string    = parsedData.url;

  const [editiorContent, setEditorContent] = useState<any>('');

  let blob: any = null;
  if(editiorContent != ''){
    blob = new Blob([JSON.stringify(editiorContent, null, '  ')], {type: 'application/json'});
  }

  return (
    <div>
    <div style={{display: "flex", flexDirection: "row"}}>
      <div>
        <EditorWithGetContent 
        url={url} 
        params={params}
        editorContent={setEditorContent}
        errorStorage={setTempErrorStorage}
        getHandlingFunc={getMethodHandling}
        getFunction={Service.getContent}
        /> 
        <button onClick={() => FileSaver.saveAs(blob, "unnamed.json")}>save file</button>
        <Link to={'/get-fetch-form'}>Go back</Link>
      </div>
    </div>
      <StatusBar error={tempErrorStorage} />
      </div>
  )
}

export default Workspace;