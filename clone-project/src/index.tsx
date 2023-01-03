import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Outlet from './page/Outlet';
// import { createBrowserRouter } from 'react-router-dom';

// type Props = {
// 	children: React.ReactNode;
// }

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Outlet />
    <App />
  </React.StrictMode>
);

reportWebVitals();
