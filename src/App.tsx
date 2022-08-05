import React         from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import EditPage from "./pages/EditPage";
import FetchPage from "./pages/FetchPage";
import WelcomePage   from "./pages/welcome/WelcomePage";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/welcome' element={<WelcomePage/>}/>
        <Route path='/edit' element={<EditPage/>}/>
        <Route path='/pick-file' element={<FetchPage/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
