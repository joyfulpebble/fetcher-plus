import React, { useState } from 'react';

import GetForm from './components/fetch-forms/GetForm';
import StatusBar from './components/status-bar/StatusBar';


function FetchForm() {
  
  return (
    <div>
      <GetForm/>
      <StatusBar/>
    </div>
  )
}

export default FetchForm