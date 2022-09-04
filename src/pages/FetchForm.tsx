import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import GetForm from './components/fetch-forms/GetForm';
import StatusBar from './components/status-bar/StatusBar';


function FetchForm() {
  
  return (
    <div>
      <GetForm/>
      <Link to={'/welcome'}>Go home</Link>
      <StatusBar/>
    </div>
  )
}

export default FetchForm