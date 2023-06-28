import { BrowserRouter, Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import Workspace from "./pages/Workspace";

import "./styles/main.scss";
import FetchPage from "./pages/FetchPage";

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
					element={<Workspace />}
				/>
				<Route
					path="/get-fetch-form"
					element={<FetchPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
