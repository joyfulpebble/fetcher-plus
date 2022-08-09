import React, { useState } from 'react'

import SideBar from './components/side-bar/SideBar';
import Workspace from './components/workspace/Workspace';

function MainPage() {

  // const test_params: object = { params: { _limit: 10 } }
  // const test_url: string = 'https://jsonplaceholder.typicode.com/posts'
  const [url, setUrl] = useState('')

  console.log(url);
  
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <SideBar setUrl={setUrl}/>
      {url ? <Workspace url={url}/> : ''}
    </div>
  )
}

export default MainPage;