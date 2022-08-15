import React, { useEffect, useState } from 'react';

import DefaultEditor from '../../../core/editor/DefaultEditor';
import fetcher from '../../../core/components/tools/fetcher';

function EditorWithContent({url, params}: any): JSX.Element {
  const [editor, setEditor] = useState<JSX.Element>()
  
  const setContentToEditor = async () => {
    try{
      const data: object = await fetcher(url, params);
      
      setEditor(<DefaultEditor content={data}/>);
    }
    catch(err){
      console.error(err);
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