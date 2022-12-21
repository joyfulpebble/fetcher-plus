import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import Workspace from "./pages/Workspace";
import FetchPage from "./pages/FetchPage";

import { getConfigSlice } from "./store/reducers/GetConfigSlice";

function App(): JSX.Element {
  const { updateConfig } = getConfigSlice.actions;

  console.log(updateConfig({
    params: {"any_parameter": "any_value"},
    url: 'any_link'
  }));
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/welcome'        element={<WelcomePage/>}/>
        <Route path='/workspace'      element={<Workspace/>}/>
        <Route path='/get-fetch-form' element={<FetchPage/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
