import React, { useEffect, useState } from 'react';
import checkNetConnection from '../../../core/tools/checkNetConnection';

import OfflineTippy from './tippy/OfflineTippy';
import OnlineTippy from './tippy/OnlineTippy';
import ErrorTippy from './tippy/ErrorTippy';

import classes from './StatusBar.module.scss';

function StatusBar({error}: any): JSX.Element {
  const [errorCount, setErrorCount] = useState(error);
  const [errorText, setErrorText] = useState(error);
  const [online, setOnline] = useState(checkNetConnection());
  
  useEffect(() => {
    if(typeof error != 'undefined'){
      setErrorCount(error[0]);
      setErrorText(error[1]);
    }
  }, [error])
  
  window.addEventListener('offline', (e) => { setOnline(false) });
  window.addEventListener('online',  (e) => { setOnline(true) });
  
  return (
    <div className={classes.StatusBarWrapper}>
      <ErrorTippy errorCount={errorCount} errorText={errorText}/>
      <div className={classes.InternetConnectionTippyWrapper}>
      {online 
        ? <OnlineTippy/>
        : <OfflineTippy/>
        }
      </div>
    </div>
  )
}

export default StatusBar;