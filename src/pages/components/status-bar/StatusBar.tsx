import React, { useEffect, useState } from 'react';
import checkNetConnection from '../../../core/components/tools/checkNetConnection';

import ErrorSVG from '../icons/ErrorSVG';
import OfflineTippy from './components/OfflineTippy';
import OnlineTippy from './components/OnlineTippy';

import classes from './StatusBar.module.scss';

function StatusBar({error}: any): JSX.Element {
  const [errorCount, setErrorCount] = useState(error);
  const [online, setOnline] = useState(checkNetConnection());
  
  useEffect(() => {
    if(typeof error != 'undefined'){
      setErrorCount(error[0]);
    }
  }, [error])
  
  window.addEventListener('offline', (e) => { setOnline(false) });
  window.addEventListener('online',  (e) => { setOnline(true) });
  
  return (
    <div className={classes.StatusBarWrapper}>
      <div className={classes.Problems}>
        <ErrorSVG/>
        <span>{errorCount ? errorCount : 0}</span>
      </div>
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