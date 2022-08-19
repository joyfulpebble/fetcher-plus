import React, { useEffect } from 'react'

import classes from './StatusBar.module.scss'

function StatusBar({error}: any): JSX.Element {
  useEffect(() => {
    console.log(error);
    
  }, [error])

  const status_color = [classes.SideBarWrapper];

  const ERR_CODE: number = error;
  
  if(ERR_CODE === 404){
    status_color.push(classes.error)
  }

  return (
    <div className={status_color.join(' ')}>
      <span>{`${ERR_CODE} error`}</span>
    </div>
  )
}

export default StatusBar;