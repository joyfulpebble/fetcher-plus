import React from 'react';

import GetConfigure from '../components/fetch-configurators/GetConfigure';
import StatusBar from '../components/status-bar/StatusBar';


function FetchForm() {
  
  return (
    <div>
      <GetConfigure/>
      <StatusBar/>
    </div>
  )
}

export default FetchForm