import React from 'react';

import EditorWithGetContent from '../EditorWithGetContent';

import Service from '../../../../core/API/Service';
import Tools from '../../../../core/tools/Tools';

function SetGetEditors({setEditorContent, setTempErrorStorage}: any): JSX.Element {
  const storageData: any[] = Tools.getAllStorage(sessionStorage);
  const parsedData: any    = JSON.parse(storageData[0]);  
  
  let params: object = parsedData.params;
  let url: string    = parsedData.url;

  const editors = [
    <EditorWithGetContent 
    url={url} 
    params={params}
    editorContent={setEditorContent}
    errorStorage={setTempErrorStorage}
    getHandlingFunc={Tools.getMethodHandling}
    getFunction={Service.getContent}
    />,
    <EditorWithGetContent 
    url={url} 
    params={params}
    editorContent={setEditorContent}
    errorStorage={setTempErrorStorage}
    getHandlingFunc={Tools.getMethodHandling}
    getFunction={Service.getHeader}
    />,
    <EditorWithGetContent 
    url={url} 
    params={params}
    editorContent={setEditorContent}
    errorStorage={setTempErrorStorage}
    getHandlingFunc={Tools.getMethodHandling}
    getFunction={Service.getConfig}
    />,
    <EditorWithGetContent 
    url={url} 
    params={params}
    editorContent={setEditorContent}
    errorStorage={setTempErrorStorage}
    getHandlingFunc={Tools.getMethodHandling}
    getFunction={Service.getStatus}
    />
  ];

  return (
    <div className='editors' style={{display: 'flex'}}>
      {editors.map((e, i) => <div key={i}>{e}</div>)}
    </div>
  );
}

export default SetGetEditors;