import React from 'react';

import Tools from '../tools/Tools';

import StatusBar from '../components/layouts/status-bar/StatusBar';
import LinkButton from '../components/UI/Buttons/LinkButton';


function WelcomePage(): JSX.Element {
  const history = localStorage.getItem('REQUEST_HISTORY') || '[]'
  const parsed_history = JSON.parse(history)

  console.log(parsed_history);
  
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