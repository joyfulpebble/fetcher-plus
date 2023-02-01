import { useEffect, useState } from 'react';

import { useAppSelector } from '../../../hooks/redux/redux';

import OfflineTippy from '../../UI/Tippy/OfflineTippy';
import OnlineTippy from '../../UI/Tippy/OnlineTippy';
import ErrorTippy from '../../UI/Tippy/ErrorTippy';

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