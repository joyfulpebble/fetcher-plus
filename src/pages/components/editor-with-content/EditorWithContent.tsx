import React, { useEffect, useState } from 'react';

import DefaultEditor from '../../../core/editor/DefaultEditor';
import fetcher from '../../../core/components/tools/fetcher';

function EditorWithContent({url, params, editorContent, setStatusError}: any): JSX.Element {

  const [editor, setEditor] = useState<JSX.Element>();
  
  const setContentToEditor = async () => {
    const data: object | number = await fetcher(url, params);
  
    if(typeof data === 'number'){
      setStatusError(data);
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

  return (
    <div>
      {editor}
    </div>
  )
}

export default EditorWithContent;