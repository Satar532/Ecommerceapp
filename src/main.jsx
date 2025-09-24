import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Store.js'
 import { BrowserRouter } from 'react-router-dom'
 import { useLoadingBar } from "react-top-loading-bar";
import LoadingBar from "react-top-loading-bar";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <LoadingBar
    height={3}
        color="#f11946"
        progress={100}
        
      />
    <Provider store={store}>
    <App />

    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
