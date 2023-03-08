import React,{useState} from 'react'
import {FiMenu}from "react-icons/fi"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {AiOutlineClose} from "react-icons/ai"
import CustomButton from './CustomButton'
import { menuItems } from '../model/types'


const Navbar = () => {
const [open, setOpen] = useState<boolean>(false)
const navigate = useNavigate()
const handleMenu = () =>{
  setOpen(prev => !prev)
}
  return (
    <nav className='shadow-md flex px-8 md:px-24 py-8  w-full justify-between items-center'>
        <h2 className=' cursor-pointer text-2xl text-dark-blue font-semibold' onClick={() =>navigate('/')}>Daily Blog News</h2>
        <div onClick={handleMenu} className="block md:hidden">
          {open ? <AiOutlineClose size={20}/> :<FiMenu size={20}/>}
        </div>
        <div className={open ? "fixed top-7 left-0" :"hidden"}>
        {menuItems.map(label =><ul key={label.id}>
        <li className='py-16'>
            <Link to={label.path} className="px-24 text-dark-blue">{label.label}</Link>
        </li>
      
        </ul>)}
        <CustomButton className='px-24' onClick={() =>navigate('/login')}>Sign in</CustomButton>
        </div>
        <div className='hidden md:block'>
            <CustomButton onClick={() =>navigate('/login')}>Sign in</CustomButton>
        </div>
    </nav>
  )
}

export default Navbar