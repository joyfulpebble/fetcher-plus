import { useAppSelector } from '../../../hooks/redux/redux';

import OfflineTippy from '../../UI/Tippy/OfflineTippy';
import OnlineTippy from '../../UI/Tippy/OnlineTippy';
import ErrorTippy from '../../UI/Tippy/ErrorTippy';

import classes from './StatusBar.module.scss';
import { useOnlineStatus } from '../../../hooks/react/useOnlineStatus';

function StatusBar(): JSX.Element {
  const isOnline = useOnlineStatus();
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