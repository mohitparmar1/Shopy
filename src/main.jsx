import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Context/ShopContext.jsx'
import SavedContextProvider from './Context/SavedContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <SavedContextProvider>
      <App/>
    </SavedContextProvider>
    
  </ShopContextProvider>,
)
