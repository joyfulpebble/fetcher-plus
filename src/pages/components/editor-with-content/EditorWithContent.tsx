import React, { useEffect, useState } from 'react';

import DefaultEditor from '../../../core/editor/DefaultEditor';
import fetcher from '../../../core/components/tools/fetcher';
import { AxiosError } from 'axios';

function EditorWithContent({url, params, editorContent}: any): JSX.Element {

  const [editor, setEditor] = useState<JSX.Element>();
  
  const setContentToEditor = async () => {
    const data: object = await fetcher(url, params);
    
    if(data != null){
      setEditor(
        <DefaultEditor 
          width={'500px'} 
          height={'500px'} 
          value={data} 
          options={{tabSize: 2}} 
          setContent={editorContent}
        />
      );
    } else {
      setEditor(<h1>Error!</h1>)
    }
  };

  useEffect(() => {
    setContentToEditor();
  }, [])

  return (
    <div>
      {editor}
    </div>
  )
}

export default EditorWithContent;