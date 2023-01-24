import { BrowserRouter, Route, Routes } from "react-router-dom";
import { withErrorBoundary } from "react-error-boundary"

import WelcomePage from "./pages/WelcomePage";
import Workspace from "./pages/Workspace";
import FetchPage from "./pages/FetchPage";

import LinkButton from "./components/UI/Buttons/LinkButton";

function App(): JSX.Element {
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

export default withErrorBoundary(App, {
  fallback: <div>
      Error
      
      <LinkButton
        content={'Go back'}
        path={"/get-fetch-form"}
      />
    </div>
  
});;
