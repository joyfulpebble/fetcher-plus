import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FileSaver from 'file-saver';

import EditorWithGetContent from './components/editor-with-get-content/EditorWithGetContent';
import StatusBar from './components/status-bar/StatusBar';
import getAllStorage from '../core/tools/getAllStorage';

//'https://jsonplaceholder.typicode.com/posts'
function Workspace(): JSX.Element {
  const [tempErrorStorage, setTempErrorStorage] = useState(undefined);

  const storageData = getAllStorage(sessionStorage);
  const parsedData = JSON.parse(storageData[0]);  
  
  let url = parsedData.url;
  let params = parsedData.params;

  const [editiorContent, setEditorContent] = useState('');

  let blob: any = null;
  if(editiorContent != ''){
    blob = new Blob([JSON.stringify(editiorContent, null, '  ')], {type: 'application/json'});
  }

  return (
    <div>
     <div>
        <EditorWithGetContent 
        url={url} 
        params={params}
        editorContent={setEditorContent}
        errorStorage={setTempErrorStorage}
        /> 
        <button onClick={() => FileSaver.saveAs(blob, "unnamed.json")}>save file</button>
        <Link to={'/get-fetch-form'}>Go back</Link>
      </div>
      <StatusBar error={tempErrorStorage} />
    </div>
  )
}

export default Workspace;