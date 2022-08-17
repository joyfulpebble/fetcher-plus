import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';

function DefaultEditor({width, height, value, options, setContent}: any): JSX.Element {

  const [editContent, setEditContent] = useState(value);
  
  useEffect(() => {
    setContent(editContent);
  }, [editContent])

  return (
    <div>
      <Editor
        width={width}
        height={height}

        theme='vs-dark'
        
        defaultLanguage="json"
        value={`${JSON.stringify(value, null, '  ')}`}
        
        onChange={element => {setEditContent(element!)}}
        
        options={
          options
        }
        />
    </div>
  )
}

export default DefaultEditor;