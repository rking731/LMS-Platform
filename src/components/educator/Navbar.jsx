import React from 'react'
import { assets, dummyEducatorData } from '../../assets/assets'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Navbar = ({theme,setTheme}) => {

  const toggle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  const educatorData = dummyEducatorData
  const {user} = useUser()
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-black/50 py-3'>
      <Link to='/'>
       <img src={assets.logo} alt="logo" className='w-28 lg:w-32' />
       </Link>
       <div className='flex items-center gap-5 text-black relative'>
        <p>Hi! {user ? user.fullName : 'Developers'}</p>
        {user ? <UserButton /> : <img className='max-w-8' src={assets.profile_img} />}
        <img onClick={()=>{toggle_mode()}} src={theme== 'light' ? assets.night : assets.sun } alt="day" className='w-6 lg:w-9' />
       </div>
    </div>
  )
}

export default Navbar