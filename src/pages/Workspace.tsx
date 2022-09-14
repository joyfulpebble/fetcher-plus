import React, { useEffect, useState } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { Link } from 'react-router-dom';

import FileSaver from 'file-saver';
import Tools from '../core/tools/Tools';

import EditorWithGetContent from './components/editor-with-get-content/EditorWithGetContent';
import StatusBar from './components/status-bar/StatusBar';
import Inset from './components/inset/Inset';
import Service from '../core/API/Service';

//'https://jsonplaceholder.typicode.com/posts'
function Workspace(): JSX.Element {
  const [tempErrorStorage, setTempErrorStorage] = useState<undefined | any[]>(undefined);
  
  const storageData: any[] = Tools.getAllStorage(sessionStorage);
  const parsedData: any    = JSON.parse(storageData[0]);  
  
  let params: object = parsedData.params;
  let url: string    = parsedData.url;
  
  const [editiorContent, setEditorContent] = useState<any>('');
  
  let blob: any = null;
  if(editiorContent != ''){
    blob = new Blob([JSON.stringify(editiorContent, null, '  ')], {type: 'application/json'});
  }
  
  
  const [currentInset, setCurrentInset] = useState(0);
  const insetNames = ['data', 'headers', 'config', 'status'];
  const insetFunctions = [Service.getContent, Service.getHeader, Service.getConfig, Service.getStatus];
  const editors = [
    <EditorWithGetContent 
    url={url} 
    params={params}
    editorContent={setEditorContent}
    errorStorage={setTempErrorStorage}
    getHandlingFunc={Tools.getMethodHandling}
    getFunction={insetFunctions[0]}
    />,
    <EditorWithGetContent 
    url={url} 
    params={params}
    editorContent={setEditorContent}
    errorStorage={setTempErrorStorage}
    getHandlingFunc={Tools.getMethodHandling}
    getFunction={insetFunctions[1]}
    />,
    <EditorWithGetContent 
    url={url} 
    params={params}
    editorContent={setEditorContent}
    errorStorage={setTempErrorStorage}
    getHandlingFunc={Tools.getMethodHandling}
    getFunction={insetFunctions[2]}
    />,
    <EditorWithGetContent 
    url={url} 
    params={params}
    editorContent={setEditorContent}
    errorStorage={setTempErrorStorage}
    getHandlingFunc={Tools.getMethodHandling}
    getFunction={insetFunctions[3]}
    />,]

    useEffect(() => {
      console.log(insetNames[currentInset]);
  }, [currentInset])
  

  return (
    <div>
    <div>
      <Inset elements={insetNames} element={currentInset} setElement={setCurrentInset}/>
      <div> 
        <div className='editors' style={{display: 'flex'}}>
          {editors.map((e, i) => <div key={i}>{e}</div>)}
        </div>
        <button onClick={() => FileSaver.saveAs(blob, "unnamed.json")}>save file</button>
        <Link to={'/get-fetch-form'}>Go back</Link>
      </div>
    </div>
      <StatusBar error={tempErrorStorage} />
      </div>
  )
}

export default Workspace;