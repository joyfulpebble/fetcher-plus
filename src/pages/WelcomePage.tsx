import StatusBar from '../components/layouts/status-bar/StatusBar';
import LinkButton from '../components/UI/Buttons/RedirectButton';

import { request_history_db } from '../hooks/idb/request-history-db'
import { idb_set } from '../tools/idb-tools/idbMethods';

function WelcomePage(): JSX.Element {
  const history = localStorage.getItem('REQUEST_HISTORY') || '[]'
  const parsed_history = JSON.parse(history)
  // console.log(parsed_history);
  
  idb_set('test-key', {key: 'value'}, request_history_db, 'history')

  return (
    <div>
      WelcomePage
      
      <br />
      <br />
      
      <LinkButton
        content={'get'}
        path={"/get-fetch-form"}
      />

      
      <StatusBar/>
    </div>
  )
}

export default WelcomePage;