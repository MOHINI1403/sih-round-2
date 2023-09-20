
import React from "react";
import {Routes,Route} from "react-router-dom"
import Home from './containers/home/Home';
import Login from "./containers/auth/Login";
function App() {
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />} />
            
        </Routes>
    </div>
  );
}

export default App;
