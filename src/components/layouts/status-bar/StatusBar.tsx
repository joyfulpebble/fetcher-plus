import { useState } from 'react';

import Tools from '../../../tools/Tools';
import { useAppSelector } from '../../../hooks/redux/redux';

import OfflineTippy from './tippy/OfflineTippy';
import OnlineTippy from './tippy/OnlineTippy';
import ErrorTippy from './tippy/ErrorTippy';

import classes from './StatusBar.module.scss';

function StatusBar(): JSX.Element {
  const [online, setOnline] = useState<boolean>(Tools.checkNetConnection());
  const errorsArray = useAppSelector(state => state.requestError).errors;
    
  window.addEventListener('offline', (e) => { setOnline(false) });
  window.addEventListener('online',  (e) => { setOnline(true) });
  
  return (
    <div className={classes.StatusBarWrapper}>
      <ErrorTippy errorCount={errorsArray.length} errorText={errorsArray.length > 1 ? 'API Error' : 'No problems'}/>
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