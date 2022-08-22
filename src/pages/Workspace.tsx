import React, { useState } from 'react';
import FileSaver from 'file-saver';

import EditorWithContent from './components/editor-with-content/EditorWithContent';
import StatusBar from './components/UI/status-bar/StatusBar';
import GetSettings from './components/UI/fetch-settings/GetSettings';

function Workspace(): JSX.Element {
  // const test_url: string = 'https://jsonplaceholder.typicode.com/posts'
  const [statusError, setStatusError] = useState(null);

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
          <EditorWithContent 
          url={url} 
          params={params}
          editorContent={setEditorContent}
          setStatusError={setStatusError}
          /> 
          <button onClick={() => FileSaver.saveAs(blob, "unnamed.json")}>save file</button>
        </div>
        : 
        <GetSettings 
          setUrl={setUrl}
          setParams={setParams}
          setIsChecked={setIsChecked} 
          isChecked={isChecked}
        />
      }
      <StatusBar warning={setStatusError} error={statusError} />
    </div>
  )
}

export default Workspace;