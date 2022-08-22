import React, { useEffect } from 'react';
import StatusBar from './components/UI/status-bar/StatusBar';

function WelcomePage(): JSX.Element {

  function poopityScoop(){
    console.log(navigator.onLine)
  }

  useEffect(() => {
    poopityScoop()
  }, [])

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