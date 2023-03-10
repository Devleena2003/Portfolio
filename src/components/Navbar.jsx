import React,{useState} from 'react'
import {FaBars,FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/logo-removebg-preview.png'
import { Link } from "react-scroll";
function Navbar() {

    const[nav,setNav]=useState(false)
    const handleClick=()=> setNav(!nav)

    
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
  <div>
  <img src={logo} alt='logo' style={{width:'80px'}}/>
  </div>

    <ul className='hidden md:flex'>
      <li className='hover:text-green-600'>
      <Link to="home"  smooth={true} duration={500} >
          Home
        </Link>
      </li>

      <li className='hover:text-green-600'>
      <Link to="about"  smooth={true} duration={500} >
          About
        </Link>
      </li>
      <li className='hover:text-green-600'>
      <Link to="skills"  smooth={true} duration={500} >
          Skills
        </Link>
      </li>

      <li className='hover:text-green-600'>
      <Link to="projects"  smooth={true} duration={500} >
          Projects
        </Link>
      </li>
      <li className='hover:text-green-600'>
      <Link to="contact"  smooth={true} duration={500} >
          Contact
        </Link>
      </li>
       
    </ul>

  <div onClick={handleClick} className='md:hidden z-10'>
    {!nav? <FaBars/> : <FaTimes/>}
   
  </div>
  <ul className={!nav? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl hover:text-green-600'>
        
      <Link to="home"  smooth={true} duration={500} >
          Home
        </Link>
      
        </li>
        <li className='py-6 text-4xl  hover:text-green-600'>
        
      <Link to="about"  smooth={true} duration={500} >
          About
        </Link>
     
        </li>
        <li className='py-6 text-4xl  hover:text-green-600'>
        
      <Link to="skills"  smooth={true} duration={500} >
          Skills
        </Link>
      
        </li>
        <li className='py-6 text-4xl hover:text-green-600'>
       
      <Link to="projects"  smooth={true} duration={500} >
          Projects
        </Link>
      
        </li>
        <li className='py-6 text-4xl  hover:text-green-600'>
        
      <Link to="contact"  smooth={true} duration={500} >
          Contact
        </Link>
      
        </li>
    </ul>
    <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/devleena-das-759359224/'target="_blank">
        LinkedIn <FaLinkedin size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#212121]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Devleena2003' target="_blank">
        GitHub <FaGithub size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
          <a className='flex justify-between items-center w-full text-gray-300' href='devleena2003@gmail.com' target="_blank">
        Email <HiOutlineMail size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-700'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1C53da8Q7hbuARj0-_opocZOTLWQCAntY/view?usp=share_link' target="_blank">
        Resume <BsFillPersonLinesFill size={30}/>
          </a>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar