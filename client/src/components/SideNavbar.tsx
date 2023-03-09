import React from 'react'
import { Link } from 'react-router-dom'
import { menuItems } from '../model/types'


const SideNavbar = () => {
  return (
    <div className='fixed h-full shadow-md hidden md:block'>
        {menuItems.map(label =><ul key={label.id}>
        <li className='py-16'>
            <Link to={label.path} className="px-24 text-dark-blue">{label.label}</Link>
        </li>
        </ul>)}
    </div>
  )
}

export default SideNavbar