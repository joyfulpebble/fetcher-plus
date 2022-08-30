import React from 'react';

import OfflineSVG from '../../icons/OfflineSVG';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

import classes from '../StatusBar.module.scss';

function OfflineTippy({online}: any): JSX.Element {
  return (
    <Tippy
      className={classes.TippyWrapper}
      content={<span >No internet connection</span>}
      animation='shift-away'
      hideOnClick={false}
      trigger='mouseenter'
      placement='top-end'
      maxWidth={88}
      >
      <div>
        <OfflineSVG/>
      </div>
    </Tippy>
  )
}

export default OfflineTippy;