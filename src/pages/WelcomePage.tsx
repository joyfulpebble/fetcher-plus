import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import StatusBar from './components/status-bar/StatusBar';

import getAllStorage from '../core/tools/getAllStorage'

function WelcomePage(): JSX.Element {
  useEffect(() => {
    sessionStorage.clear()
  }, [])

  const history = getAllStorage(localStorage);
  const historyElem = JSON.parse(history[0]);

  console.log(historyElem);
  
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