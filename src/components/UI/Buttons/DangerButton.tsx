import React from 'react';

import classes from '../../../styles/modules/Buttons.module.scss';

function DangerButton({children, ...props}: any): JSX.Element {
  return (
    <button {...props} className={classes.DangerButton}>
      {children}
    </button>
  )
}

export default DangerButton;