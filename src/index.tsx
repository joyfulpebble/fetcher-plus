import ReactDOM from "react-dom/client";

import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { setupStore } from "./redux/store";
import { formDataFilesIdbStore } from "./idb/idb-store";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { OnlineStatusProvider } from "./hooks/react/useOnlineStatus";

const root = ReactDOM.createRoot(document.getElementById("root")!);
const store = setupStore();
const persistor = persistStore(store);
formDataFilesIdbStore();

root.render(
	<Provider store={store}>
		<PersistGate
			loading={null}
			persistor={persistor}
		>
			<ErrorBoundary>
				<OnlineStatusProvider>
					<App />
				</OnlineStatusProvider>
			</ErrorBoundary>
		</PersistGate>
	</Provider>
);
