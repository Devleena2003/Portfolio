import React from 'react'
import HTML from '../assets/html.jpg'
import CSS from '../assets/css.jfif'
import JS from '../assets/js.png'
import R from '../assets/react.jpg'
import C from '../assets/c.png'
import Cp from '../assets/c++.jpg'

import Xd from '../assets/xd.png'
import Figma from '../assets/figma.png'
import BS from '../assets/bootstrap.png'
import TW from '../assets/tailwind.png'
import SCSS from '../assets/sass.png'
import git from '../assets/git.png'


function Skills() {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-green-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={HTML} alt='html'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={CSS} alt='html'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={JS} alt='html'/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={R} alt='html'/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={C} alt='html'/>
                    <p className='my-4'>C</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={Cp} alt='html'/>
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={git} alt='html'/>
                    <p className='my-4'>Git</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={BS} alt='html'/>
                    <p className='my-4'>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={TW} alt='html'/>
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={SCSS} alt='html'/>
                    <p className='my-4'>SCSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={Xd} alt='html'/>
                    <p className='my-4'>Adobe XD</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={Figma} alt='html'/>
                    <p className='my-4'>Figma</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills