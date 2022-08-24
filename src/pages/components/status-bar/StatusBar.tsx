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
    <div className={classes.SideBarWrapper}>
      <div className={classes.Problems}>
        <ErrorSVG/>
        <span>{error ? 1 : 0}</span>
      </div>
      <Tippy
        content={<span>{online ? 'Internet connected' : 'No internet connection'}</span>}
        animation='shift-away'
        hideOnClick={false}
        trigger='mouseenter'
        >
        <div>
          {online ? <OnlineSVG/> : <OfflineSVG/>}
        </div>
      </Tippy>
    </div>
  )
}

export default StatusBar;