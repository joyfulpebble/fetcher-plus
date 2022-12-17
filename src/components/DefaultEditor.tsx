import React, { useEffect, useState } from 'react';

import Editor from '@monaco-editor/react';
import { DefaultEditorProps } from '../types';

function DefaultEditor({EditorWidth, EditorHeight, EditorInitValue, EditorConfig, ContentToSaveFunc}: DefaultEditorProps): JSX.Element {
  const [editedContent, setEditedContent] = useState<string>(EditorInitValue);
  
  useEffect(() => {
    ContentToSaveFunc(editedContent);     
  }, [editedContent])

  return (
    <div>
      <Editor
        width={EditorWidth}
        height={EditorHeight}

        theme='vs-dark'
        
        defaultLanguage="json"
        value={JSON.stringify(EditorInitValue, null, '  ')}
        
        onChange={element => {setEditedContent(element!)}}
        
        options={
          {
          ...EditorConfig,
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