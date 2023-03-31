import Statusbar from '../components/layouts/statusbar/Statusbar';
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

      
      <Statusbar/>
    </div>
  )
}

export default WelcomePage;