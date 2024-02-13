import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import Homepage from './pages/homepage.jsx';
// import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    errorElement: 
    <div className='flex justify-center items-center w-screen h-screen'>
      <p>file notfound</p>
    </div>  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
