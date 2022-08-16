import React, { useEffect, useState } from 'react';

import DefaultEditor from '../../../core/editor/DefaultEditor';
import fetcher from '../../../core/components/tools/fetcher';

function EditorWithContent({url, params}: any): JSX.Element {

  const [editor, setEditor] = useState<JSX.Element>();
  const [editorContent, setEditorContent] = useState({});
  
  const setContentToEditor = async () => {
    try{
      const data: object = await fetcher(url, params);
      
      setEditor(<DefaultEditor width={'500px'} height={'500px'} value={data} options={{tabSize: 2}} setContent={setEditorContent} isNeedSave={false} />);
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