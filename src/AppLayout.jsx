import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './global/NavBar'
// import Footer from './global/Footer'


const AppLayout = () => {
  return (
    <>
  
    <Navbar/>
    <Outlet/>
     {/* <Footer/> */}
  
      
    </>
  )
}

export default AppLayout
