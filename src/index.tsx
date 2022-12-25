import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { setupStore } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const store = setupStore();
const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>
);