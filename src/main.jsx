// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import App from './pages/App/App.jsx';

// CSS
import './assets/css/index.css';

const router = createBrowserRouter([
  {
    path: '/:id',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
