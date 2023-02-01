import { useEffect, useState } from 'react';

import Tools from '../../../tools/Tools';
import { useAppSelector } from '../../../hooks/redux/redux';

import OfflineTippy from './tippy/OfflineTippy';
import OnlineTippy from './tippy/OnlineTippy';
import ErrorTippy from './tippy/ErrorTippy';

import classes from './StatusBar.module.scss';

function StatusBar(): JSX.Element {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);
  
  const errorsArray = useAppSelector(state => state.requestError).errors;
  
  return (
    <div className={classes.StatusBarWrapper}>
      <ErrorTippy errorCount={errorsArray.length} errorText={errorsArray.length > 1 ? 'API Error' : 'No problems'}/>
      <div className={classes.InternetConnectionTippyWrapper}>
      {isOnline 
        ? <OnlineTippy/>
        : <OfflineTippy/>
        }
      </div>
    </div>
  )
}

export default StatusBar;