import React from 'react';
import { Link } from 'react-router-dom';

import classes from '../../../styles/modules/Buttons.module.scss';

function RedirectButton({content, path}: any): JSX.Element {
  return (
    <Link className={classes.RedirectButton} to={path}>{content}</Link>
  )
}

export default RedirectButton;