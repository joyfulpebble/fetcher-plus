import React from 'react'

import OnlineSVG from '../../icons/OnlineSVG';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

import classes from '../StatusBar.module.scss'

function OnlineTippy({online}: any): JSX.Element {
  return (
    <Tippy
    className={classes.InternetConnection}
    content={<span >{online ? 'Internet connected' : 'No internet connection'}</span>}
    animation='shift-away'
    hideOnClick={false}
    trigger='mouseenter'
    placement='top-end'
    maxWidth={82}
    >
    <div>
      <OnlineSVG/>
    </div>
  </Tippy> 
  )
}

export default OnlineTippy;