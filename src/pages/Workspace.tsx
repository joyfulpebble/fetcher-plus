import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AxiosResponse } from 'axios';

import FileSaver from 'file-saver';
import Service from '../API/Service';
import { useFetching } from '../hooks/react/useFetching';
import { useAppSelector } from '../hooks/redux/redux';

import DefaultEditor from '../components/DefaultEditor';
import StatusBar from '../components/layouts/status-bar/StatusBar';

function Workspace(): JSX.Element {
  const [contentToSave, setContentToSave] = useState<any>({});
  const [response, setResponse] = useState<AxiosResponse | {}>({});
  const [responseType, setResponseType] = useState<string>('');
  
  const { url, params, request_name } = useAppSelector(state => state.getConfig);

  const [ fetchUrl ] = useFetching(async () => {
    const response: AxiosResponse = await Service.GET(url, params);
      JSON.stringify(response)

    setResponseType(response.headers['content-type']);
    setResponse(response);
  });

  /** */
  const blob_request_data = new Blob([JSON.stringify(contentToSave.data, null, '  ')], {type: responseType});
  
  /** */

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <div>
      <div>
        <DefaultEditor 
          EditorWidth={'500px'} 
          EditorHeight={'500px'}
          EditorInitValue={response} 
          EditorConfig={{tabSize: 2}} 
          ContentToSaveFunc={setContentToSave}
        />
        {/*  */}
        <button onClick={() => FileSaver.saveAs(blob_request_data, request_name)}>save request data</button>

        {/*  */}
      </div>
    <Link to={'/get-fetch-form'}>Go back</Link>
    <StatusBar/>
    </div>
  )
}

export default Workspace;