import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FileSaver from 'file-saver';

import StatusBar from '../components/layouts/status-bar/StatusBar';
import DefaultEditor from '../components/DefaultEditor';
import { useAppDispatch, useAppSelector } from '../hooks/redux/redux';
import { useFetching } from '../hooks/react/useFetching';
import Service from '../API/Service';

//'https://jsonplaceholder.typicode.com/posts'
function Workspace(): JSX.Element {
  const [contentToSave, setContentToSave] = useState<string>('');
  const [response, setResponse] = useState<string>('{"error": "no response :/" }');
  
  const { url, params } = useAppSelector(state => state.getConfig)
  const [ fetchUrl, error ] = useFetching(async () => {
    const response = await Service.GET(url, params);
      
    setResponse(JSON.stringify(response));
  })
  
  let blob: any = null;
  if(contentToSave != ''){
    blob = new Blob([JSON.stringify(contentToSave, null, '  ')], {type: 'application/json'});
  }
  
  useEffect(() => {
    fetchUrl()    
  }, [])
  
  return (
    <div>
      <div>
        <DefaultEditor 
          EditorWidth={'500px'} 
          EditorHeight={'500px'}
          EditorInitValue={JSON.parse(response)} 
          EditorConfig={{tabSize: 2}} 
          ContentToSaveFunc={() => {}}
        />
        <button onClick={() => FileSaver.saveAs(blob, "unnamed.json")}>save file</button>
      </div>
    <Link to={'/get-fetch-form'}>Go back</Link>
    <StatusBar error={[1, error]} />
    </div>
  )
}

export default Workspace;