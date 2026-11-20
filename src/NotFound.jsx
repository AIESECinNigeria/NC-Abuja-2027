import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='bg-[url(/images/bg-texture.png)] bg-cover bg-black w-[100%] min-h-[100dvh] flex flex-col items-center justify-center '>
        <p className='text-white text-[70px] font-baserona '>NOT FOUND</p>
        <Link to='/' className='bg-[#EC0303] p-2 '>
            <p className='text-white text-[20px] font-artegraLight '>Go Back to Home</p>
        </Link>
    </div>
  )
}

export default NotFound