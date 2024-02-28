import React from 'react'
import { Link } from 'react-router-dom'

function ModePage() {
  return (
        <div className='min-h-screen min-w-screen bg-zinc-700 flex justify-center items-center flex-col gap-10'>
            <Link><button className='p-5 bg-green-400 rounded-2xl text-7xl hover:bg-green-700'>Play with friend!</button></Link>
            <Link to={"/single-player"}><button className='p-5 bg-green-400 rounded-2xl text-7xl hover:bg-green-700'>Play with Robot!</button></Link>
            
        </div>
  )
}

export default ModePage