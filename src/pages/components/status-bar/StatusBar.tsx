import React, { useEffect, useState } from 'react';
import checkNetConnection from '../../../core/components/tools/checkNetConnection';

import ErrorSVG from '../icons/ErrorSVG';
import OfflineTippy from './components/OfflineTippy';
import OnlineTippy from './components/OnlineTippy';

import classes from './StatusBar.module.scss';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

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
  
  window.addEventListener('offline', (e) => { setOnline(false) });
  window.addEventListener('online',  (e) => { setOnline(true) });
  
  return (
    <div className={classes.StatusBarWrapper}>
      <Tippy
        className={classes.TippyWrapper}
        content={
          <span 
            title={errorStorage ? errorStorage : 'no errors'}>
              {errorCount ? `Errors: ${errorCount}` : 'No problems'}
          </span>
        }
        interactive={true}
        appendTo={document.body}
      >
        <div className={classes.Problems}>
          <ErrorSVG/>
          <span>{errorCount ? errorCount : 0}</span>
        </div>
      </Tippy>
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