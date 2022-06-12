import React, { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
// import {  Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "./auth/login/Login";
import Header from "./components/Header";
import Task from "./components/tasks/Task";
import { fetchUserDetails } from "./redux/user-slice/userDetailsSlice";


function App() {
  const dispatch = useDispatch();
  const isAuthenticated=useSelector(state=>state.auth.isAuthenticated);

 
  //fetch user details from redux store
  useEffect(()=>{
    if(isAuthenticated){
      dispatch(fetchUserDetails());
    }
  },[dispatch,isAuthenticated]);

  // if(!isAuthenticated){
  //    return  <Login/>
  // }
  

  return (
    <div className="App">
       <Header />
       <Task/>
    </div>
  );
}

export default App;
