import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import Service from '../components/API/Service';
import FortmatToString from '../components/tools/FortmatToString';
import { fetch } from '../fetcher/Fetcher';

function DefaultEditor() {

 

  useEffect(() => {
    fetch();
  }, [])//url, param

  return (
    <div>
      <a href="http://localhost:3000/pick-file">Go pick-file</a>

      <Editor
        height="90vh"
        defaultLanguage="json"
        value={`test`}//${content}

        // onChange={element => setSaveContent(element!)}
        />
    </div>
  )
}

export default DefaultEditor;