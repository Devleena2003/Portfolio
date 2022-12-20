import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
   <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-pink-600 text-4xl'>Hi, I am </p>
    <h1 className='text-4xl sm:text-7xl font-bold text-green-500'>Devleena Das</h1>
    <h2 className='text-4xl sm:text-4xl font-bold text-gray-300'>I am a Front End Developer</h2>
    <p className='text-gray-300 py-4 max-w-[700px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui veritatis commodi ipsum tempore blanditiis magnam, nostrum non? Quod iure voluptate, fugiat fuga odit, facere, nemo eos sit eaque consectetur dolorem?</p>
    <div>
    <a href='https://drive.google.com/file/d/1C53da8Q7hbuARj0-_opocZOTLWQCAntY/view?usp=share_link' target="_blank">
        <button className='text-white border-2 px-6 py-3 my-2 flex items-center rounded-lg hover:bg-green-600 hover:border-green-600'>
            View Resume</button></a>
    </div>

   </div>
    </div>
  )
}

export default Home