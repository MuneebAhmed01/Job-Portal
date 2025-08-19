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
        element:<OnBoarding/>
      },
      {
        path:"/joblisting",
        element:<JobListing/>
      },
      {
        path:"/myjob",
        element:<MyJob/>
      },
      {
        path:"/alljobs",
        element:<JobPage/>
      },
      {
        path:"/post",
        element:<JobPost/>
      },
      {
        path:"/save",
        element:<SaveJob/>
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
