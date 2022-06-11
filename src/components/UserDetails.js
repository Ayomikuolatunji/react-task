/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const UserDetails = () => {
   const [dropdownOpen,setDropdownOpen] = useState(false);
   const userDetails = useSelector(state => state.userDetails.userDetails)
    


  return (
    <div>
        <div href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 text-xl cursor-pointer" onClick={()=>setDropdownOpen(!dropdownOpen)}>
            <span className="text-gray-900">
                User Details
            </span>
         </div> 
            {dropdownOpen && (
                <div className="absolute mt-1 w-[300px] mx-auto h-[auto] left-0 right-0 shadow-xl z-[999]">
                   <div className="px-4 py-3 text-sm text-gray-900">
                         <div>
                              <span className="text-gray-900">
                                  Name: {userDetails?.user?.name}
                                </span>
                         </div>
                         <div className="font-medium truncate">
                              <span className="text-gray-900">
                                  Email: {userDetails?.user?.email}
                                </span>
                         </div>
                         <div className="role">
                              <span className="text-gray-900">
                                  Role: {userDetails?.user?.role_name}
                               </span>   
                         </div>
                    </div> 
                </div>
            ) 
            } 
    </div>
  )
}

export default UserDetails