import { useState } from 'react'
import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import LandingPage from './pages/LandingPage'
import OnBoarding from './pages/OnBoarding'
import MyJob from './pages/MyJob'
import JobPage from './pages/JobPage'
import JobListing from './pages/JobListing'
import JobPost from './pages/JobPost'
import SaveJob from './pages/SaveJob'
import { ThemeProvider } from "@/components/theme-provider"
import ProtectedRoute from './components/ProtectedRoute'


const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>
      },
      {
        path:"/onboarding",
        element:<ProtectedRoute><OnBoarding/></ProtectedRoute>
      },
      {
        path:"/joblisting",
        element:<ProtectedRoute><JobListing/></ProtectedRoute>
        
      },
      {
        path:"/myjob",
        element:<ProtectedRoute><MyJob/></ProtectedRoute>
      },
      {
        path:"/alljobs",
        element:<ProtectedRoute><JobPage/></ProtectedRoute>
      },
      {
        path:"/post",
        element:<ProtectedRoute><JobPost/></ProtectedRoute>
      },
      {
        path:"/save",
        element:<ProtectedRoute><SaveJob/></ProtectedRoute>
      }
    ]
  }
])

function App() {

  return (
    <>
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      <RouterProvider router={router}/>
    </ThemeProvider>
    </>
  )
}

export default App
