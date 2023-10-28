import { BrowserRouter, Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import WorkspacePage from "./pages/WorkspacePage";

import "./styles/main.css";
import "./styles/variables.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
