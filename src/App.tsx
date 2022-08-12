import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Workspace    from "./pages/Workspace";
import WelcomePage from "./pages/WelcomePage";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/welcome' element={<WelcomePage/>}/>
        <Route path='/edit' element={<Workspace/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
