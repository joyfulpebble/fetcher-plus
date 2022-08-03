import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import Service from '../components/API/Service';
import FortmatToString from '../components/tools/FortmatToString';

function DefaultEditor() {

  const URL = "https://jsonplaceholder.typicode.com/posts";
  const PARAMS = { 
    params: {
    _limit: 1
  }}

  const [content, setContent] = useState('');
  const [saveContent, setSaveContent] = useState(content)
  
  async function fetch() {
    setContent(FortmatToString(await Service.getContent(URL, PARAMS)));
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <div>
      <a href="http://localhost:3000/pick-file">Go pick-file</a>

      <Editor
        height="90vh"
        defaultLanguage="json"
        value={`${content}`}

        onChange={element => setSaveContent(element!)}
        />
    </div>
  )
}

export default DefaultEditor;