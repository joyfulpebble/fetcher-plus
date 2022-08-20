import React, { useEffect, useState } from 'react';

import DefaultEditor from '../../../core/editor/DefaultEditor';
import getMethodHandling from '../../../core/components/tools/getMethodHandling';

function EditorWithContent({url, params, editorContent, setStatusError}: any): JSX.Element {

  const [editor, setEditor] = useState<JSX.Element>();
  const [error, setError]   = useState<boolean>(false);
  
  const setContentToEditor = async () => {
    const data: object | number = await getMethodHandling(url, params);
  
    if(typeof data === 'number'){
      setStatusError(data);
      setError(true)
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
      {error ? <button onClick={() =>  window.location.reload()}>Back to fetch settings</button> : editor}
    </div>
  )
}

export default EditorWithContent;