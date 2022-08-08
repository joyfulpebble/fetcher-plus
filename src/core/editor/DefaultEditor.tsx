import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';

function DefaultEditor({ content }: any) {

  
  const [saveContent, setSaveContent] = useState(content);

  return (
    <div style={{height: '100p'}}>
      <Editor
        height="99vh"
        width="100vw"
        theme='vs-dark'
        defaultLanguage="json"
        value={`${JSON.stringify(content, null, '   ')}`}

        onChange={element => setSaveContent(element!)}
        />
    </div>
  )
}

export default DefaultEditor;