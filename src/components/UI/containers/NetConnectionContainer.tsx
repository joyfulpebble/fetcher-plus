import React from 'react'

import { NetConnetctionProps } from '../../../types/elements';

import OfflineTippy from '../../UI/Tippy/OfflineTippy';
import OnlineTippy from '../../UI/Tippy/OnlineTippy';

function NetConnectionContainer({isOnline}: NetConnetctionProps) {
  return (
    <div>
      {
        isOnline 
          ? <OnlineTippy/> 
          : <OfflineTippy/> 
      }
    </div>
  )
}

export default NetConnectionContainer;