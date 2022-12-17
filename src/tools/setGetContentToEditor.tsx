import React, { useEffect, useState } from 'react';
import { requestConfigs, SetGetContentToEditorProps } from '../types';

import DefaultEditor from '../components/DefaultEditor';
import ErrorSVG from '../components/.svg/ErrorSVG';

function SetGetContentToEditor({ContentTosaveFunc, SetErrorFunction, HandlingRequestFunc, RequestFunction}: SetGetContentToEditorProps): JSX.Element {
  const [editor, setEditor] = useState<JSX.Element>();
  const [error, setError]   = useState<any[]>([false]);

  const getConfig: string = localStorage.getItem('GET_CFG') || JSON.stringify({url: "", params: {}});
  const parsedGetConfig: requestConfigs.GetConfigType = JSON.parse(getConfig);
  const {params, url} = parsedGetConfig;
  
  const setContent = async () => {
    const data: any | object = await HandlingRequestFunc(url, params, RequestFunction);

    if(data[0] === 'err'){
      setEditor(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <ErrorSVG w={200} h={200}/>
          <span>Oops! Something went wrong.</span>
        </div>
      );
      setError([true, data[1].message]);
    } else {
      setEditor(
        <DefaultEditor 
          EditorWidth={'500px'} 
          EditorHeight={'500px'} 
          EditorInitValue={data} 
          EditorConfig={{tabSize: 2}} 
          ContentToSaveFunc={ContentTosaveFunc}
        />
      );
    }
  };

  useEffect(() => {
    setContent();
  }, [])

  useEffect(() => {
    if(error[0]){
      SetErrorFunction([1, error[1]]);
    }
  }, [error])

    return (
      <div>
        {editor}
      </div>
  )
}

export default SetGetContentToEditor;