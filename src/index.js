import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import {api} from './state/api'
// import Authenticator from './state/authenticator'
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // global: Authenticator
  },
  middleware: (getDefault) => getDefault().concat(api.middleware)
})
setupListeners(store.dispatch)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>    
  </React.StrictMode>
);
