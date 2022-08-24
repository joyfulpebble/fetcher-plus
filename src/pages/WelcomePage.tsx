import React from 'react';

import StatusBar from './components/status-bar/StatusBar';

function WelcomePage(): JSX.Element {
  return (
    <div>
      WelcomePage
      
      <br />
      <br />
      
      <a href="http://localhost:3000/get-settings">get</a>
      <StatusBar/>
    </div>
  )
}

export default WelcomePage;