import React, { useState } from 'react'

import EditorWithContent from './components/editor-with-content/EditorWithContent';
import StatusBar from './components/status-bar/StatusBar';
import FetchSettings from './components/fetch-settings/FetchSettings';

function Workspace(): JSX.Element {
  // const test_params: object = { params: { _limit: 10 } }
  // const test_url: string = 'https://jsonplaceholder.typicode.com/posts'
  const [url, setUrl]         = useState();
  const [params, setParams]   = useState();

  return (
    <div>
      {url ? <EditorWithContent url={url} params={params}/> : <FetchSettings setUrl={setUrl}/>}
    
      <StatusBar/>
    </div>
  )
}

export default Workspace;