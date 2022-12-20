import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FileSaver from 'file-saver';

import SetGetContentToEditor from '../tools/setGetContentToEditor';
import StatusBar from '../components/layouts/status-bar/StatusBar';
import Service from '../API/Service';
import Tools from '../tools/Tools';

//'https://jsonplaceholder.typicode.com/posts'
function Workspace(): JSX.Element {
  const [tempErrorStorage, setTempErrorStorage] = useState<undefined | any[]>(undefined);
  const [contentToSave, setContentToSave] = useState<string>('');
  
  let blob: any = null;
  if(contentToSave != ''){
    blob = new Blob([JSON.stringify(contentToSave, null, '  ')], {type: 'application/json'});
  }

  return (
    <div>
      <div>
       <SetGetContentToEditor
          ContentTosaveFunc={setContentToSave}
          SetErrorFunction={setTempErrorStorage}
          HandlingRequestFunc={Tools.getMethodHandling}
          RequestFunction={Service.GET}
        />
        <button onClick={() => FileSaver.saveAs(blob, "unnamed.json")}>save file</button>
        <Link to={'/get-fetch-form'}>Go back</Link>
      </div>
        <StatusBar error={tempErrorStorage} />
    </div>
  )
}

export default Workspace;