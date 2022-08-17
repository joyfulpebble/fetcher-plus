import React, { useEffect, useState } from 'react'

import EditorWithContent from './components/editor-with-content/EditorWithContent';
import StatusBar from './components/status-bar/StatusBar';
import FetchSettings from './components/fetch-settings/FetchSettings';

function Workspace(): JSX.Element {
  // const test_url: string = 'https://jsonplaceholder.typicode.com/posts'
  const [url, setUrl]         = useState('');
  const [params, setParams]   = useState('');

  useEffect(() => {
    console.log(params);
    
  }, [params])

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      {url 
        ? <EditorWithContent 
          url={url} 
          params={params}
          /> 
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