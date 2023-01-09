import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.scss';

function LinkButton({content, path}: any): JSX.Element {
  return (
    <Link className={classes.LinkButton} to={path}>{content}</Link>
  )
}

export default LinkButton;