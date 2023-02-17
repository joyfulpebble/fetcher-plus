import StatusBar from '../components/layouts/status-bar/StatusBar';
import BuggyButton from '../components/UI/Buttons/BuggyButton';
import LinkButton from '../components/UI/Buttons/RedirectButton';
import { demo } from '../tools/indexdb-tools/create_db';

function WelcomePage(): JSX.Element {
  const history = localStorage.getItem('REQUEST_HISTORY') || '[]'
  const parsed_history = JSON.parse(history)
  // console.log(parsed_history);
  
  demo()

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