import React from 'react';

import classes from './Button.module.scss';

function CustomButton({children, ...props}: any): JSX.Element {
  return (
    <button {...props} className={classes.Button}>
      {children}
    </button>
  )
}

export default CustomButton;