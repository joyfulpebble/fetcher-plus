import React, { useState } from 'react'

import EditorWithContent from './components/editor-with-content/EditorWithContent';
import StatusBar from './components/status-bar/StatusBar';
import Popup from './components/popup/Popup';

function Workspace(): JSX.Element {
  // const test_params: object = { params: { _limit: 10 } }
  // const test_url: string = 'https://jsonplaceholder.typicode.com/posts'
  const [params, setParams] = useState();
  const [url, setUrl]       = useState();
  
  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Popup setUrl={setUrl}/>
        {url ? <EditorWithContent url={url} params={params}/> : null}
      </div>
      <StatusBar/>
    </div>
  )
}

export default Workspace;