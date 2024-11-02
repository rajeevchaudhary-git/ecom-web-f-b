import React, { useEffect, useState } from 'react'
import Inp from './components/inputs/inp'
import Tbl from './components/tables/Tbl';
import Insert from './ProductsMgm/Insert';
import Viewproduct from './ProductsMgm/Viewproduct';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import EditProduct from './ProductsMgm/EditProduct';

function App() {
const router = createBrowserRouter([
  {
    path:'/',
    element:<Viewproduct/>
  },
  {
    path:'/edit/:id',
    element:<EditProduct/>
  }
])

  return (
    <div>
     
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
