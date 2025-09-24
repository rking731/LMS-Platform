import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'

const Navbar = ({theme,setTheme}) => {

  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }


  const isCourseListpage = location.pathname.includes('/course-list');

  const {openSignIn} = useClerk();
  const {user} = useUser();
  const {navigate, isEducator} = useContext(AppContext);

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListpage ? 'bg-white':'bg-red-300/70'} `}>
        <img onClick={()=> navigate('/')} src={assets.logo} alt="Logo" className='w-28 lg:w-32
        cursor-pointer' />
        <div className='hidden md:flex items-center gap-5 text-gray-500'>
          <div className='flex items-center gap-5'>
          { user && 
          <>
            <button onClick={()=> {navigate('/educator')}} className='bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black'>
              {isEducator ? 'Educator Dashboard' : 'Become Educator'}
            </button>
            | <Link to='/my-enrollments' className='bg-blue-600 text-white px-5 py-2 rounded-full  hover:bg-white hover:text-black hover:border hover:border-black'>My Enrollments</Link>
            </>
            }
            
          </div>
         { user ? <UserButton/> : 
          <button onClick={()=> openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>}
          <img onClick={()=>{toggle_mode()}} src={theme== 'light' ? assets.night : assets.sun } alt="day" className='w-6 lg:w-9' />
          
        </div>
        {/* for small screens*/ }
        <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
           <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
           { user && 
          <>
             <button onClick={()=> {navigate('/educator')}} className='bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black'>
              {isEducator ? 'Educator Dashboard' : 'Become Educator'}
            </button>
            | <Link to='/my-enrollments' className='bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer hover:bg-white hover:text-black hover:border hover:border-black'>My Enrollments</Link>
            </>
            }
            
            </div>
            {
              user ? <UserButton /> : <button onClick={()=> openSignIn()}><img src={assets.user_icon} alt="" /></button>
            }
          <img onClick={()=>{toggle_mode()}} src={theme== 'light' ? assets.night : assets.sun } alt="day" className='w-6 lg:w-9' />
        </div>
    </div>
  )
}

export default Navbar