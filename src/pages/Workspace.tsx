import React, { useEffect, useState } from 'react';
import FileSaver, { saveAs } from 'file-saver';

import EditorWithContent from './components/editor-with-content/EditorWithContent';
import StatusBar from './components/status-bar/StatusBar';
import FetchSettings from './components/fetch-settings/FetchSettings';

function Workspace(): JSX.Element {
  // const test_url: string = 'https://jsonplaceholder.typicode.com/posts'
  const [url, setUrl]         = useState('');
  const [params, setParams]   = useState('');

  const [isChecked, setIsChecked] = useState(false);
  let blob = new Blob([JSON.stringify({text: "hello world!"})], {type: 'application/json'});

  return (
    <div>
      {url 
        ? 
        <div>
          <EditorWithContent 
          url={url} 
          params={params}
          /> 
          <button onClick={() => FileSaver.saveAs(blob, "unnamed.json")}>savefile</button>
        </div>
        : <FetchSettings 
          setUrl={setUrl}
          setParams={setParams}
          setIsChecked={setIsChecked} 
          isChecked={isChecked}
          />}
      <StatusBar/>
    </div>
  )
}

export default Workspace;