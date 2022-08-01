import React         from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultEditor from "./core/editor/DefaultEditor";
import FetchFile from "./pages/FetchFile";
import WelcomePage   from "./pages/welcome/WelcomePage";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/welcome' element={<WelcomePage/>}/>
        <Route path='/home' element={<DefaultEditor/>}/>
        <Route path='/pick-file' element={<FetchFile/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
