import React, { useEffect, useState } from 'react'
import DefaultEditor from '../../../core/editor/DefaultEditor'
import SetDataToState from '../../../core/components/tools/SetDataToState';
import OpenEditors from '../open-editors/OpenEditors';
import Test from './Test';

function Workspace() {
  const [editor, setEditor] = useState<any>([<Test/>])
  const [page, setPage] = useState(0)

  const test_params: object = { params: { _limit: 10 } }
  const test_url: string = 'https://jsonplaceholder.typicode.com/posts'
  
  const [url, setUrl] = useState(test_url);
  const [params, setParams] = useState(test_params);
  
  const [content, setContent] = useState();
  
  const setContentToEditor = async () => {
    try{
      const data: any = await SetDataToState(url, params);
      
      editor.push(<DefaultEditor content={data}/>)
    }
    catch(err){
      console.error(err)
    }
  };

  useEffect(() => {
    setContentToEditor()
  }, [])

  return (
    <div>
      <OpenEditors 
        pages={['test', 'data']}
        page={page}
        setPage={setPage}
       />
      {editor ? editor[page] : 'no content'}
    </div>
  )
}

export default Workspace;