import React from 'react';
import classes from './style/Input.module.scss'

function Input({innerRef, ...props}: any): JSX.Element {
  return (
    <input className={classes.Input} ref={innerRef} {...props}/>
  )
}

export default Input;