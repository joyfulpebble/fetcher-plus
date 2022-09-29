import React, { useEffect, useState } from 'react';

import Editor from '@monaco-editor/react';

function DefaultEditor({width, height, value, options, setContent}: any): JSX.Element {

  const [editContent, setEditContent] = useState<any>(value);
  
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
        value={JSON.stringify(value, null, '  ')}
        
        onChange={element => {setEditContent(element!)}}
        
        options={
          {
          ...options,
          fontLigatures: true,
          fontFamily: "'Consolas', 'Courier New', monospace",
          fontSize: 14
          }
        }
        />
    </div>
  )
}

export default DefaultEditor;