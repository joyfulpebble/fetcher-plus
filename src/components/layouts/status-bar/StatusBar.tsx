import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import Tools from '../../../tools/Tools';
import { useAppSelector } from '../../../hooks/redux/redux';

import OfflineTippy from './tippy/OfflineTippy';
import OnlineTippy from './tippy/OnlineTippy';
import ErrorTippy from './tippy/ErrorTippy';

import classes from './StatusBar.module.scss';

function StatusBar(): JSX.Element {
  const [online, setOnline] = useState<boolean>(Tools.checkNetConnection());
  
  const errorArr = useAppSelector(state => state.requestError)
  console.log(errorArr);
  
  window.addEventListener('offline', (e) => { setOnline(false) });
  window.addEventListener('online',  (e) => { setOnline(true) });
  
  return (
    <div className={classes.StatusBarWrapper}>
      <ErrorTippy errorCount={errorArr.length} errorText={errorArr.map((e: any) => { return e })}/>
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