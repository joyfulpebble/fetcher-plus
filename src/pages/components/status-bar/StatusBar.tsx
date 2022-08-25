import React, { useState } from 'react';
import checkNetConnection from '../../../core/components/tools/checkNetConnection';

import ErrorSVG from '../icons/ErrorSVG';
import OnlineTippy from './components/OnlineTippy';

import OfflineSVG from '../icons/OfflineSVG';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

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
        : <Tippy
          className={classes.InternetConnection}
          content={<span >{online ? 'Internet connected' : 'No internet connection'}</span>}
          animation='shift-away'
          hideOnClick={false}
          trigger='mouseenter'
          placement='top-end'
          maxWidth={88}
          >
          <div>
            <OfflineSVG/>
          </div>
        </Tippy>
        }
      </div>
    </div>
  )
}

export default StatusBar;