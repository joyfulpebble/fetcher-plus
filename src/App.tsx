import React         from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefualtEditor from "./core/editor/DefualtEditor";
import PickFilePopup from "./core/file-picker/react-compoments/PickFilePopup";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<DefualtEditor/>}/>
        <Route path='/pick-file' element={<PickFilePopup/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
