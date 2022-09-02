import React, { useEffect, useState } from 'react';
import FileSaver from 'file-saver';

import EditorWithGetContent from '../components/editor-with-get-content/EditorWithGetContent';
import StatusBar from './components/status-bar/StatusBar';
import GetSettings from '../components/fetch-form/GetForm';

function Workspace(): JSX.Element {
  // const test_url: string = 'https://jsonplaceholder.typicode.com/posts'
  const [tempErrorStorage, setTempErrorStorage] = useState(undefined);

  const [url, setUrl]         = useState('');
  const [params, setParams]   = useState('');

  const [editiorContent, setEditorContent] = useState('');

  const [isChecked, setIsChecked] = useState(false);

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
          <button onClick={() => window.location.reload()}>go back</button>
        </div>
        : 
        <GetSettings 
          setUrl={setUrl}
          setParams={setParams}
          setIsChecked={setIsChecked} 
          isChecked={isChecked}
        />
      }
      <StatusBar error={tempErrorStorage} />
    </div>
  )
}

export default Workspace;