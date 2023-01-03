import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FileSaver from 'file-saver';

import StatusBar from '../components/layouts/status-bar/StatusBar';
import DefaultEditor from '../components/DefaultEditor';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getMethod } from '../redux/actions/GetMethod';

//'https://jsonplaceholder.typicode.com/posts'
function Workspace(): JSX.Element {
  const [tempErrorStorage, setTempErrorStorage] = useState<undefined | any[]>(undefined);
  const [contentToSave, setContentToSave] = useState<string>('');

  const dispatch = useAppDispatch();
  const { url, params } = useAppSelector(state => state.getConfig)
  
  
  
  useEffect(() => {
    dispatch(getMethod(url, params))
  }, [])
  
  const { data } = useAppSelector(state => state.getMethod);
  // console.log(JSON.parse(data));

  let blob: any = null;
  if(contentToSave != ''){
    blob = new Blob([JSON.stringify(contentToSave, null, '  ')], {type: 'application/json'});
  }

  return (
    <div>
      <div>
        <DefaultEditor 
          EditorWidth={'500px'} 
          EditorHeight={'500px'}
          EditorInitValue={JSON.parse(data)} 
          EditorConfig={{tabSize: 2}} 
          ContentToSaveFunc={() => {}}
        />
        <button onClick={() => FileSaver.saveAs(blob, "unnamed.json")}>save file</button>
        <Link to={'/get-fetch-form'}>Go back</Link>
      </div>
        <StatusBar error={tempErrorStorage} />
    </div>
  )
}

export default Workspace;