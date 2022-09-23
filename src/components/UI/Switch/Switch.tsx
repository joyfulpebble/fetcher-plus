import React from 'react';

import SwitchToggle from 'react-switch';

function Switch({...props}: any) {
  return (
    <SwitchToggle
      {...props}
      onColor={'#5839af'}
      activeBoxShadow={'none'}
      handleDiameter={13}
      height={17}
      width={40}
    />
  )
}

export default Switch