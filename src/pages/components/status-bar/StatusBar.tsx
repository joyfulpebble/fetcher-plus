import React, { useEffect, useState } from 'react';
import checkNetConnection from '../../../core/components/tools/checkNetConnection';

import OfflineTippy from './components/OfflineTippy';
import OnlineTippy from './components/OnlineTippy';
import ErrorTippy from './components/ErrorTippy';

import classes from './StatusBar.module.scss';

function StatusBar({error}: any): JSX.Element {
  const [errorCount, setErrorCount] = useState(error);
  const [errorStorage, setErrorStorage] = useState(error);

  const [online, setOnline] = useState(checkNetConnection());
  
  useEffect(() => {
    if(typeof error != 'undefined'){
      setErrorCount(error[0]);
      setErrorStorage(error[1]);
    }
  }, [error])
  
  window.addEventListener('offline', () => { setOnline(false) });
  window.addEventListener('online',  () => { setOnline(true) });
  
  return (
    <div className={classes.StatusBarWrapper}>
        <ErrorTippy errorStorage={errorStorage} errorCount={errorCount}/>
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