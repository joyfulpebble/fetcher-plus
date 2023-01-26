import React from 'react';

import classes from './Button.module.scss';

function PrimaryButton({children, ...props}: any): JSX.Element {
  return (
    <button {...props} className={classes.PrimaryButton}>
      {children}
    </button>
  )
}

export default PrimaryButton;