import React, { useEffect, useState } from 'react';
import FileSaver from 'file-saver';

import EditorWithGetContent from './components/editor-with-get-content/EditorWithGetContent';
import StatusBar from './components/status-bar/StatusBar';
import { Link } from 'react-router-dom';

//'https://jsonplaceholder.typicode.com/posts'
function Workspace(): JSX.Element {
  function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]));
    }

    return values.slice(-1);
}
  let url = allStorage();
  useEffect(() => {
    url = allStorage()
    console.log(url);
  }, [allStorage()])
   
  
  let params = {}
  const [tempErrorStorage, setTempErrorStorage] = useState(undefined);

  const [editiorContent, setEditorContent] = useState('');

  let blob: any = null;
  if(editiorContent != ''){
    blob = new Blob([JSON.stringify(editiorContent, null, '  ')], {type: 'application/json'});
  }

  return (
    <div>
      {url 
        ? 
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
        : 
        <></>
      }
      <StatusBar error={tempErrorStorage} />
    </div>
  )
}

export default Workspace;