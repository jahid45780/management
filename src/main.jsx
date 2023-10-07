import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/PageError/Error';
import Home from './Components/Home/Home';
import About from './Components/Home/About';
import Blog from './Components/Home/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader:()=> fetch('marry.json')
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
