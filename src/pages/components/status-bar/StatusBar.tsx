import React from 'react'

import classes from './StatusBar.module.scss'


export function displayError(error: any) {
  console.log(error);
}

function StatusBar({}: any): JSX.Element {

  return (
    <div className={classes.SideBarWrapper}>
      status
    </div>
  )
}

export default StatusBar;