import React, { useState } from 'react';
import checkNetConnection from '../../../core/components/tools/checkNetConnection';

import ErrorSVG from '../icons/ErrorSVG';
import OfflineTippy from './components/OfflineTippy';
import OnlineTippy from './components/OnlineTippy';



import classes from './StatusBar.module.scss';

function StatusBar({error}: any): JSX.Element {
  // const [errorCount, setErrorCount] = useState();
  const [online, setOnline] = useState(checkNetConnection());
  
  window.addEventListener('offline', (e) => { setOnline(false) });
  window.addEventListener('online',  (e) => { setOnline(true) });
  
  return (
    <div className={classes.StatusBarWrapper}>
      <div className={classes.Problems}>
        <ErrorSVG/>
        <span>{error ? 1 : 0}</span>
      </div>
      <div className={classes.TippyWrapper}>
      {online 
        ? <OnlineTippy online={online}/>
        : <OfflineTippy online={online}/>
        }
      </div>
    </div>
  )
}

export default StatusBar;