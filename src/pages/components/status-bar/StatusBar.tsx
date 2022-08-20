import React from 'react'

import classes from './StatusBar.module.scss'

function StatusBar({error}: any): JSX.Element {

  const status_color: string[] = [classes.SideBarWrapper];
  let status_massage: string = 'No problems';
  
  if(error != null){
    status_color.push(classes.error);
    status_massage = `Error code: ${error}`;
  }

  return (
    <div className={status_color.join(' ')}>
      <span>{status_massage}</span>
    </div>
  )
}

export default StatusBar;