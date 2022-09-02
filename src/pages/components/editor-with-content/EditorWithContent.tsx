import React, { useEffect, useState } from 'react';

import DefaultEditor from '../../../core/editor/DefaultEditor';
import getMethodHandling from '../../../core/components/tools/getMethodHandling';

function EditorWithContent({url, params, editorContent, errorStorage}: any): JSX.Element {

  const [editor, setEditor] = useState<JSX.Element>();
  const [error, setError]   = useState<any[]>([false]);
  
  const setContentToEditor = async () => {
    const data: any | object = await getMethodHandling(url, params);

    if(data[0] === 'err'){
      setEditor(
        <DefaultEditor 
          width={'500px'} 
          height={'500px'} 
          value={data[1]} 
          options={{tabSize: 2, }} 
          setContent={editorContent}
        />
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

export default EditorWithContent;