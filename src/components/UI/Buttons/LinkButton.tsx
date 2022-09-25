import React from 'react';
import { Link } from 'react-router-dom';

import classes from './styles/Button.module.scss';

function BackButton({content, path}: any): JSX.Element {
  return (
    <Link className={classes.LinkButton} to={path}>{content}</Link>
  )
}

export default BackButton;