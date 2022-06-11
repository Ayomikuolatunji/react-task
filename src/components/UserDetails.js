/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

const UserDetails = () => {
   const [dropdownOpen,setDropdownOpen] = useState(false);

  return (
    <li className=''>
        <div href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 text-xl cursor-pointer" onClick={()=>setDropdownOpen(!dropdownOpen)}>
            <span className="text-gray-900">
                User Details
            </span>
         </div> 
            {dropdownOpen && (
                <div className="absolute mt-1 w-[30%] mx-auto h-[30px] left-0 right-0 bg-black text-red-100">
                    
                </div>
            ) 
            } 
    </li>
  )
}

export default UserDetails