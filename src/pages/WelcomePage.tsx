import React from 'react';
import { Link } from 'react-router-dom';

import Tools from '../core/tools/Tools';

import StatusBar from './components/status-bar/StatusBar';


function WelcomePage(): JSX.Element {
  const history: any[]   = Tools.getAllStorage(localStorage);
  const parsed_history: any = history.map((e: any) => JSON.parse(e));

  console.log(parsed_history);
  
  return (
    <div>
      WelcomePage
      
      <br />
      <br />
      
      <Link to={"/get-fetch-form"}>get</Link>
      <StatusBar/>
    </div>
  )
}

export default WelcomePage;