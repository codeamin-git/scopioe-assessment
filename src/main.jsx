import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import { router } from './routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-[1440px] mx-auto font-poppins'>
      <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
