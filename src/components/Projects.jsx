import React from 'react'
import recipe from '../assets/recipe.jpg'
import qbank from '../assets/qbank.jpg'
import bakery from '../assets/e-bakery.jfif'
function Projects() {
  return (
    <div name= 'projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-green-600'>Projects</p>
                <p className='py-6'>Check out some of my projects</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage:`url(${recipe})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider '>
                        Food Recipe App
                    
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/Devleena2003/Food-Recipe-Website' target="_blank">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-green-600'>View Project</button>
                        </a>
                       
                        </div>
                        </div> 
                </div>

                <div style={{backgroundImage:`url(${qbank})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider '>
                        QBank
                    
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/Devleena2003/QBank-frontend' target="_blank">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-green-600'>View Project</button>
                        </a>
                       
                        </div>
                        </div> 
                </div>

               
                <div style={{backgroundImage:`url(${bakery})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider '>
                        E Bakery App
                    
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/Devleena2003/E-Bakery-Website' target="_blank">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg  hover:bg-green-600'>View Project</button>
                        </a>
                       
                        </div>
                        </div> 
                </div>
            </div>
        </div>

    </div>
  )
}

export default Projects
