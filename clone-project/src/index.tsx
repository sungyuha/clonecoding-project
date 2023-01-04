import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Outlet from './page/Outlet';
// import { createBrowserRouter } from 'react-router-dom';

// 타입스크립트에서는 children 사용 시 배열 반환 불가
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
