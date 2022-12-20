import React from 'react'

function About() {
  return (
    <div name= 'about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-fu;; px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className=' text-4xl font-bold inline border-b-4 border-green-600'>About</p>
                </div>
                <div>
                </div>

                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, ab?</p>
    </div>
    <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro hic quis praesentium, eveniet fugit error quibusdam et dolores officiis perspiciatis expedita dignissimos repudiandae sapiente numquam iste deserunt provident eum odit?
    </div>
            </div>
        </div>

    </div>
  )
}

export default About