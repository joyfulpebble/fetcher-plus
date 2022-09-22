import React from 'react';

import classes from './Button.module.scss'

function Button({content, ...props}: any) {
  return (
    <span {...props} className={classes.ButtonWrapper}>
      {content}
    </span>
  )
}

export default Button