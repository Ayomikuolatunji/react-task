import React from "react";
// import {  Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./auth/login/Login";
import Header from "./components/Header";


function App() {
  const isAuthenticated=useSelector(state=>state.auth.isAuthenticated);

 

  if(!isAuthenticated){
     return  <Login/>
  }
  

  return (
    <div className="App">
       <Header />
    </div>
  );
}

export default App;
