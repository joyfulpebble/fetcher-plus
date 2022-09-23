import React from 'react';

import classes from './styles/Button.module.scss';

function SubmitButton({content, ...props}: any): JSX.Element {
  return (
    <button {...props} className={classes.SubmitButton}>
      {content}
    </button>
  )
}

export default SubmitButton;