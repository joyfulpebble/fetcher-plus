import React from 'react'

import SideBar from './components/side-bar/SideBar';
import Workspace from './components/workspace/Workspace';

function MainPage() {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <SideBar/>
      <Workspace/>
    </div>
  )
}

export default MainPage;