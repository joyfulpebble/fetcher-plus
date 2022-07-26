import React from 'react';

import Editor from '@monaco-editor/react';

function DefualtEditor() {

  return (
    <Editor
      height="90vh"
      defaultLanguage="json"
      defaultValue={`{ "value": 1, "babel": "alo" }`}
    />
  )
}

export default DefualtEditor;