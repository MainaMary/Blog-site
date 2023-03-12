import React,{useState} from 'react'
import {FiMenu}from "react-icons/fi"
import { useNavigate } from 'react-router-dom'
import {AiOutlineClose} from "react-icons/ai"
import CustomButton from './CustomButton'
import NavLink from './NavLink'



const Navbar = () => {
const [open, setOpen] = useState<boolean>(false)
const navigate = useNavigate()
const handleMenu = () =>{
  setOpen(prev => !prev)
}
  return (
    <nav className='bg-[#f5f5f5] z-20 fixed shadow-md flex px-8 md:px-24 py-8  w-full justify-between items-center'>
        <h2 className=' cursor-pointer text-2xl text-dark-blue font-semibold' onClick={() =>navigate('/')}>Daily Blog News</h2>
        <div onClick={handleMenu} className="block md:hidden">
          {open ? <AiOutlineClose size={20}/> :<FiMenu size={20}/>}
        </div>
        <div className={open ? "fixed top-24 bg-white z-10 h-full left-0 shadow-md w-[50%]" :"hidden"}>
        <NavLink onClick={handleMenu}/>
        <div className='w-full flex text-center m-auto justify-center'>
        <CustomButton  onClick={() =>navigate('/login')}>Sign in</CustomButton>
        </div>
        
        </div>
        <div className='hidden md:flex'>
        <CustomButton onClick={() =>navigate('/register')}>Sign up</CustomButton>
            <CustomButton onClick={() =>navigate('/login')}>Sign in</CustomButton>
        </div>
    </nav>
  )
}

export default Navbar