import React from 'react';

import classes from './styles/Button.module.scss';

function BackButton({content, ...props}: any): JSX.Element {
  return (
    <button {...props} className={classes.BackButton}>
      {content}
    </button>
  )
}

export default BackButton;