import React from 'react';

import Tools from '../tools/Tools';

import StatusBar from '../components/status-bar/StatusBar';
import LinkButton from '../components/UI/Buttons/LinkButton';


function WelcomePage(): JSX.Element {
  const history: any[]   = Tools.getAllStorage(localStorage);
  const parsed_history: any = history.map((e: any) => JSON.parse(e));

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