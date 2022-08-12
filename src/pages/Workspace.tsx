import React, { useState } from 'react'

import EditorWithContent from './components/editor-with-content/EditorWithContent';
import DefaultEditor from '../core/editor/DefaultEditor';
import StatusBar from './components/status-bar/StatusBar';
import SideBar from './components/side-bar/SideBar';

function MainPage(): JSX.Element {
  // const test_params: object = { params: { _limit: 10 } }
  // const test_url: string = 'https://jsonplaceholder.typicode.com/posts'
  const [params, setParams] = useState();
  const [url, setUrl]       = useState();
  
  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <SideBar setUrl={setUrl}/>
        {url ? <EditorWithContent url={url} params={params}/> : <DefaultEditor options={{domReadOnly: true, readOnly: true}}/>}
      </div>
      <StatusBar/>
    </div>
  )
}

export default MainPage;