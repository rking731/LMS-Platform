import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
        <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h1>
        <p className='text-gray-500 sm:text-sm'>Incidient sint fugiat partiatur cupidatat consectetur sit 
          cillum anim id <br /> venium aliqua proident excepteur commodo do ea.
        </p>
        <div className='flex items-center font-medium gap-6 mt-4'>
          <Link to={'/course-list'} onClick={()=> scrollTo(0,0)}  className='px-10 py-3 rounded-md text-white bg-blue-600 hover:bg-white hover:text-black hover:border hover:border-black'>Get started</Link>
          <a href='#' className='flex item-center gap-2'>Learn more <img src={assets.arrow_icon} alt="arrow_icon" /></a>
        </div>
    </div>
  )
}

export default CallToAction