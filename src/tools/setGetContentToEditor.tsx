import React, { useEffect, useState } from 'react';
import Tools from './Tools';

import DefaultEditor from '../components/DefaultEditor';
import ErrorSVG from '../components/.svg/ErrorSVG';

function SetGetContentToEditor({editorContent, errorStorage, getHandlingFunc, getFunction}: any): JSX.Element {
  const [editor, setEditor] = useState<JSX.Element>();
  const [error, setError]   = useState<any[]>([false]);

  interface GetConfigType {
    url: string;
    params: object;
  }

  const storageData: GetConfigType = JSON.parse(localStorage.getItem('GET_CFG') || '');
  const params = storageData.params;
  const url    = storageData.url;
  
  const setContent = async () => {
    const data: any | object = await getHandlingFunc(url, params, getFunction);

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
          width={'500px'} 
          height={'500px'} 
          value={data} 
          options={{tabSize: 2}} 
          setContent={editorContent}
        />
      );
    }
  };

  useEffect(() => {
    setContent();
  }, [])

  useEffect(() => {
    if(error[0]){
      errorStorage([1, error[1]]);
    }
  }, [error])

    return (
      <div>
        {editor}
      </div>
  )
}

export default SetGetContentToEditor;