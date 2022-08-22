import React, { useState } from 'react';

import ErrorSVG from '../../icons/ErrorSVG';
import classes from './StatusBar.module.scss';

function StatusBar({error, isOffline}: any): JSX.Element {
  

  return (
    <div className={classes.SideBarWrapper}>
      <div> 
        <div className={classes.Problems}>
          <ErrorSVG/>
          <span>{error ? error[0] : 0}</span>
        </div>
      </div>
    </div>
  )
}

export default StatusBar;