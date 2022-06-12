/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/auth-slice/authSlice'
import { clearTask } from '../redux/task-slice.js/taskSlice'
import { clearUserDetails } from '../redux/user-slice/userDetailsSlice'
import UserDetails from './UserDetails'

const Header = () => {
   const dispatch = useDispatch();
   const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    
   const logoutUser=()=>{
    if(isAuthenticated){
        // clear auth data from redux store
        dispatch(logout());
        // clear user details from redux store
        dispatch(clearUserDetails())
        // clear tasks from redux store
        dispatch(clearTask())
    }
   }

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-8 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div>
        <a href="https://flowbite.com" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Task</span>
            </a>
        </div>
        <div className="flex md:mt-0 md:text-sm md:font-medium flex-row"> 
               {/* user detail dropdown */}
               <UserDetails/>
        </div>
       <div>
            <button className="relative inline-flex items-center justify-center text-sm font-medium text-gray-900 rounded-lg border-[blue] border-2 py-3 px-8 hover:bg-blue-600 hover:text-white"
            onClick={logoutUser}>
                    Logout
            </button>
        </div>
     </div>
 </nav>


  )
}

export default Header