import { useState } from 'react';
import Home from './compoent/Home';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Cart from './compoent/Cart';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/home" replace />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/cart',
      element: <Cart/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
