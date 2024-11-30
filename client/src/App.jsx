import React, { useEffect, useState } from 'react'
import Inp from './components/inputs/inp'
import Tbl from './components/tables/Tbl';
import Insert from './ProductsMgm/Insert';
import Viewproduct from './ProductsMgm/Viewproduct';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import EditProduct from './ProductsMgm/EditProduct';
import Addcategory from './components/category/Addcategory';
import ListCategory from './components/category/ListCategory';

function App() {
const router = createBrowserRouter([
  {
    path:'/',
    element:<Viewproduct/>
  },
  {
    path:'/edit/:id',
    element:<EditProduct/>
  },
  {
    path:'/insertproduct',
    element:<Insert/>
  },
  {
    path:'/addcategories',
    element:<Addcategory/>
  },
  {
    path:'/listcat',
    element:<ListCategory/>
  }
])

  return (
    <div>
     
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
