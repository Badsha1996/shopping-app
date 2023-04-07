import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux/es/exports'
import { persistor, store } from './redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { app } from "./firebase.config"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider  store={store} app={app}>
    <PersistGate loading={'Loading'} persistor={persistor} >
      <App/>
    </PersistGate>  
    </Provider>
  </React.StrictMode>
)
