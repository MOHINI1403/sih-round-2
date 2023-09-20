import React, { useState } from 'react'
import {motion} from "framer-motion"
import { fadeInOut } from "../animations"
const LoginInput = ({placeholder,icon,inputState,inputStateFunc,type,isSignUp}) => {
  
  const [isFocus,setIsFocus]=useState(false);
  const [showPassword,setShowPassword]=useState(false);
  return (
    <motion.div {...fadeInOut} className={`flex items-center justify-center gap-4 bg-slate-200 bg-opacity-20 backdrop-blur-md rounded-md w-full px-4 py-2 ${isFocus ? "shadow-md shadow-blue-200" :"shadow-none"}`}>
        {icon}
        <input type={showPassword ? "text" : type} placeholder={placeholder} className="w-full h-full bg-transparent text-black text-md font-semibold border-none outline-none" value={inputState} onChange={(e)=>inputStateFunc(e.target.value)} onFocus={()=>setIsFocus(true) } onBlur={()=>setIsFocus(false)}/>
        

    </motion.div>
  )
}

export default LoginInput