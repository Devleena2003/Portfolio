import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
    <form method='POST' action="https://getform.io/f/787de1b1-58a7-4fdc-b7a7-79c8174addc2" className='flex flex-col max-w-[600px] w-full'>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-green-600 text-gray-300 '>Contact Me</p>
       
    </div>
    <input className=' p-2 rounded-lg'type= 'text' placeholder='Name' name='name'/>
    <input className='my-4 p-2 rounded-lg' type= 'email' placeholder='Email' name='email'/>
    <textarea className='rounded-lg' name='message' rows='10' placeholder='Message'></textarea>
    <button className='text-white border-2 hover:bg-green-600 hover:border-green-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg'>Submit</button>
</form>


    </div>
  )
}

export default Contact