import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelperContextProvider } from './lib/helperContext';
import './style.scss';
import { ItemContextProvider } from './lib/itemContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelperContextProvider>
      <ItemContextProvider>
        <App />
      </ItemContextProvider>
    </HelperContextProvider>
  </React.StrictMode>
);

reportWebVitals();