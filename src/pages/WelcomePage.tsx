import React from 'react';
import { Link } from 'react-router-dom';

import StatusBar from './components/status-bar/StatusBar';

function WelcomePage(): JSX.Element {
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