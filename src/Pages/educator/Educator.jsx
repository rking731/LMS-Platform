import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/educator/Navbar'
import Sidebar from '../../components/educator/Sidebar'
import Footer from '../../components/educator/Footer'


const Educator = () => {
  const [theme,setTheme] = useState('light');
  return (
    <div className={`text-base min-h-screen bg-white ${theme} transition-colors `}>
        <Navbar theme={theme} setTheme={setTheme} />
        <div className='flex'>
          <Sidebar />
          <div className='flex-1'>
          {<Outlet />}
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Educator