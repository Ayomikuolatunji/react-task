/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../helpers/navtItems'

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-8 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div>
        <a href="https://flowbite.com" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Task</span>
            </a>
        </div>
        <ul className="flex md:mt-0 md:text-sm md:font-medium flex-row">   
                {
                    navItems.map((menuItem,index)=>{
                        return (
                           <li className='ml-3' key={index}>
                                <Link to={menuItem.url}>
                                    <span href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 text-xl">
                                       {menuItem.name}
                                     </span>
                                </Link>
                           </li>
                        )
                    })
                }
        </ul>
       <div>
            <button className="relative inline-flex items-center justify-center text-sm font-medium text-gray-900 rounded-lg border-[blue] border-2 py-3 px-8 hover:bg-blue-600 hover:text-white">
                    Logout
                </button>
        </div>
     </div>
 </nav>


  )
}

export default Header