import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import FileSaver from 'file-saver';
import Service from '../API/Service';
import { useFetching } from '../hooks/react/useFetching';
import { useAppDispatch, useAppSelector } from '../hooks/redux/redux';
import { statusErrorSlice } from '../redux/reducers/StatusErrorSlice';

import DefaultEditor from '../components/DefaultEditor';
import { withErrorBoundary } from 'react-error-boundary';
import LinkButton from '../components/UI/Buttons/LinkButton';
import StatusBar from '../components/layouts/status-bar/StatusBar';

function Workspace(): JSX.Element {
  const [contentToSave, setContentToSave] = useState<string>('');
  const [response, setResponse] = useState<string>('{}');

  const dispatch = useAppDispatch()
  const { addError } = statusErrorSlice.actions

  const { url, params } = useAppSelector(state => state.getConfig)
  const [ fetchUrl ] = useFetching(async () => {
    const response = await Service.GET(url, params);
      
    setResponse(JSON.stringify(response));
  });

  let blob: any = null;
  if(contentToSave != ''){
    blob = new Blob([JSON.stringify(contentToSave, null, '  ')], {type: 'application/json'});
  }

  useEffect(() => {
    fetchUrl();   
  }, []);
  
  return (
    <div>
      <div>
        <DefaultEditor 
          EditorWidth={'500px'} 
          EditorHeight={'500px'}
          EditorInitValue={response} 
          EditorConfig={{tabSize: 2}} 
          ContentToSaveFunc={setContentToSave}
        />
        <button onClick={() => FileSaver.saveAs(blob, "unnamed.json")}>save file</button>
      </div>
    <Link to={'/get-fetch-form'}>Go back</Link>
    <StatusBar/>
    </div>
  )
}

export default withErrorBoundary(Workspace, {
  fallback: <div>
      Error
      <LinkButton
        content={'Go back'}
        path={"/get-fetch-form"}
      />
    </div>
});