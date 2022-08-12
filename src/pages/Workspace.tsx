import React, { useState } from 'react'

import EditorWithContent from './components/editor-with-content/EditorWithContent';
import StatusBar from './components/status-bar/StatusBar';
import FetchSettingsPopup from './components/fetch-settings-popup/FetchSettingsPopup';
import Modal from './components/UI/Modal/Modal';

function Workspace(): JSX.Element {
  // const test_params: object = { params: { _limit: 10 } }
  // const test_url: string = 'https://jsonplaceholder.typicode.com/posts'
  const [visible, setVisible] = useState(false)
  const [params, setParams]   = useState();
  const [url, setUrl]         = useState();

  return (
    <div>
      <Modal visible={visible}>
        <FetchSettingsPopup setUrl={setUrl} setVisible={setVisible}/>
      </Modal>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          <button onClick={() => setVisible(true)}>Open Modal</button>
        </div>
        {url ? <EditorWithContent url={url} params={params}/> : null}
      </div>
      <StatusBar/>
    </div>
  )
}

export default Workspace;