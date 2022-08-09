import React, { useEffect, useState } from 'react'
import DefaultEditor from '../../../core/editor/DefaultEditor'
import SetDataToState from '../../../core/components/tools/SetDataToState';
import OpenEditors from '../open-editors/OpenEditors';
import Test from './Test';

function Workspace({url, params}: any) {
    const [editor, setEditor] = useState<any>([/*<Test/>*/])
    const [page, setPage] = useState(1)
    
    const [urlS, setUrlS] = useState(url);
    const [paramsS, setParamsS] = useState(params);
    
    const setContentToEditor = async () => {
      try{
        const data: any = await SetDataToState(urlS, paramsS);
        
        editor.push(<DefaultEditor content={data}/>)
      }
      catch(err){
        console.error(err)
      }
    };

    if(urlS){
      setContentToEditor()
    }

  return (
    <div>
      <OpenEditors 
        pages={[/*'test',*/ 'data']}
        page={page}
        setPage={setPage}
       />
      {editor ? editor[page] : 'no content'}
    </div>
  )
}

export default Workspace;