import React from 'react';

import SwitchToggle from 'react-switch';

function Switch({...props}: any) {
  return (
    <SwitchToggle
      {...props}
      onColor={'#5839af'}
      activeBoxShadow={'none'}
      handleDiameter={13}
      uncheckedIcon={false}
      height={17}
      width={35}
    />
  )
}

export default Switch