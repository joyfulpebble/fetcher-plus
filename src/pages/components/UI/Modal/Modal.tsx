import React from 'react'
import classes from './Modal.module.scss'

function Modal({children, visible}: any):JSX.Element {

  const rootClasses = [classes.Modal];

  if(visible){
    rootClasses.push(classes.active)
  }

  return (
    <div className={rootClasses.join(' ')} >
        <div className={classes.ModalContent} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
  )
}

export default Modal;