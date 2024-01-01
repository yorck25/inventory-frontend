import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelperContextProvider } from './lib/helperContext';
import './style.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelperContextProvider>
      <App />
    </HelperContextProvider>
  </React.StrictMode>
);

reportWebVitals();