import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import './config/IconLibrary' 
import reportWebVitals from "./reportWebVitals";


{ /*const Redux: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
} */}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
   
);
reportWebVitals();  