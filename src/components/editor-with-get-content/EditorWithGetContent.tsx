import React, { useEffect, useState } from 'react';

import DefaultEditor from '../../core/editor/DefaultEditor';
import getMethodHandling from '../../core/components/tools/getMethodHandling';
import ErrorSVG from '../icons/ErrorSVG';

function EditorWithGetContent({url, params, editorContent, errorStorage}: any): JSX.Element {

  const [editor, setEditor] = useState<JSX.Element>();
  const [error, setError]   = useState<any[]>([false]);
  
  const setContentToEditor = async () => {
    const data: any | object = await getMethodHandling(url, params);

    if(data[0] === 'err'){
      setEditor(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center '}}>
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
    setContentToEditor();
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

export default EditorWithGetContent;