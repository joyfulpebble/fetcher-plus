import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FileSaver from 'file-saver';

import SetGetContentToEditor from '../core/tools/setGetContentToEditor';
import StatusBar from '../components/status-bar/StatusBar';
import Service from '../core/API/Service';
import Tools from '../core/tools/Tools';

//'https://jsonplaceholder.typicode.com/posts'
function Workspace(): JSX.Element {
  const [tempErrorStorage, setTempErrorStorage] = useState<undefined | any[]>(undefined);
  const [editiorContent, setEditorContent] = useState<any>('');
  
  let method = Service.GET;
  const method_handling = Tools.getMethodHandling;
  
  let blob: any = null;
  if(editiorContent != ''){
    blob = new Blob([JSON.stringify(editiorContent, null, '  ')], {type: 'application/json'});
  }

  return (
    <div>
      <div>
       <SetGetContentToEditor
          editorContent={setEditorContent}
          errorStorage={setTempErrorStorage}
          getHandlingFunc={Tools.getMethodHandling}
          getFunction={Service.GET}
        />
        <button onClick={() => FileSaver.saveAs(blob, "unnamed.json")}>save file</button>
        <Link to={'/get-fetch-form'}>Go back</Link>
      </div>
        <StatusBar error={tempErrorStorage} />
    </div>
  )
}

export default Workspace;