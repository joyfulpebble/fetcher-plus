import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import Service from '../../components/API/Service';

function DefaultEditor() {

  const URL = "https://jsonplaceholder.typicode.com/posts";
  const PARAMS = { 
    params: {
    _limit: 1
  }}

  const [content, setContent] = useState('');

  const fortmatResponse = (res: any) => {
    return JSON.stringify(res, null, '  ');
  };
  
  async function fetch() {
    setContent(fortmatResponse(await Service.getContent(URL, PARAMS)));
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
        defaultValue={`${content}`}
        />
    </div>
  )
}

export default DefaultEditor;