import React from 'react';

import OnlineSVG from '../../../../components/icons/OnlineSVG';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

import classes from '../StatusBar.module.scss';

function OnlineTippy(): JSX.Element {
  return (
    <Tippy
      className={classes.TippyWrapper}
      content={<span >Internet connected</span>}
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