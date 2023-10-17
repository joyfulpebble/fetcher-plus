import { BrowserRouter, Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import WorkspacePage from "./pages/WorkspacePage";

import "./styles/main.css";
import "./styles/variables.css";

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/home"
					element={<WelcomePage />}
				/>
				<Route
					path="/workspace"
					element={<WorkspacePage />}
				/>
				{/* <Route
					path="/get-fetch-form"
					element={<FetchPage />}
				/> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
