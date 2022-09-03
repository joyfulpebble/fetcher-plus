import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import Workspace from "./pages/Workspace";
import FetchForm from "./pages/FetchForm";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/welcome'      element={<WelcomePage/>}/>
        <Route path='/workspace' element={<Workspace/>}/>
        <Route path='/get-fetch-form' element={<FetchForm/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
