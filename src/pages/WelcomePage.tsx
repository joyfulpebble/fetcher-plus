import StatusBar from '../components/layouts/statusbar/StatusBar';
import LinkButton from '../components/UI/Buttons/RedirectButton';

function WelcomePage(): JSX.Element {

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