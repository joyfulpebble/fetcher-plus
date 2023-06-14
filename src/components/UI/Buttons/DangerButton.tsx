import React from 'react';

import classes from './Buttons.module.scss';

function DangerButton({children, ...props}: any): JSX.Element {
  return (
    <button {...props} className={classes.DangerButton}>
      {children}
    </button>
  )
}

export default DangerButton;