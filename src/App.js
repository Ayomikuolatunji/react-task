import Header from "./components/Header";
import {  Route, Routes } from "react-router-dom";
import Login from "./auth/login/Login";


function App() {

  

  return (
    <div className="App">
       {/* <Header /> */}
       <Login/>
    </div>
  );
}

export default App;
