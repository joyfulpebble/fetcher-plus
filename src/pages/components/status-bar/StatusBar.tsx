import React, { useState } from 'react';
import checkNetConnection from '../../../core/components/tools/checkNetConnection';

import ErrorSVG from '../icons/ErrorSVG';
import OfflineSVG from '../icons/OfflineSVG';
import OnlineSVG from '../icons/OnlineSVG';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

import classes from './StatusBar.module.scss';

function StatusBar({error}: any): JSX.Element {
  // const [errorCount, setErrorCount] = useState();
  const [online, setOnline] = useState(checkNetConnection())
  
  return (
    <div className={classes.StatusBarWrapper}>
      <div className={classes.Problems}>
        <ErrorSVG/>
        <span>{error ? 1 : 0}</span>
      </div>
      <div className={classes.TippyWrapper}>
        <Tippy
          className={classes.InternetConnection}
          content={<span >{online ? 'Internet connected' : 'No internet connection'}</span>}
          animation='shift-away'
          hideOnClick={false}
          trigger='mouseenter'
          placement='left'
          >
          <div>
            {online ? <OnlineSVG/> : <OfflineSVG/>}
          </div>
        </Tippy>
      </div>
    </div>
  )
}

export default StatusBar;