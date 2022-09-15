import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RegisterContexProvider from './hooks/register';
import { RouterProvider } from 'react-router-dom';
import routers from './routers/rooters';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RegisterContexProvider>
    <RouterProvider router={routers}/>
  </RegisterContexProvider>
);