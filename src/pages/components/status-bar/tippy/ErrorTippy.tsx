import React from 'react';

import ErrorSVG from '../../../../components/icons/ErrorSVG';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

import classes from '../StatusBar.module.scss';

function ErrorTippy({errorText, errorCount}: any) {
  return (
    <Tippy
        className={classes.TippyWrapper}
        content={
          <span 
            title={errorText ? errorText : 'no errors'}>
              {errorCount ? `Errors: ${errorCount}` : 'No problems'}
          </span>
        }
        interactive={true}
        hideOnClick={false}
        appendTo={document.body}
      >
        <div className={classes.Problems}>
          <ErrorSVG/>
          <span>{errorCount ? errorCount : 0}</span>
        </div>
      </Tippy>
  )
}

export default ErrorTippy;