import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/app';
import Root from './components/root';

import './main.css';

const router = createBrowserRouter([
  {
    path: '/hi',
    element: <div>hi</div>,
  },
  {
    path: '/',
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
// ReactDOM.render(<App />, document.getElementById('root'));
