import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginBg,Logo} from '../../assets/images'
import {FaEnvelope, FaLock, FcGoogle} from "../../assets/icons"
import {motion} from "framer-motion";
import { buttonClick } from '../../animations'
import LoginInput from '../../components/LoginInput';


const Login = () => {


    const [userEmail,setUserEmail]=useState("");
    const [isSignUp,setIsSignUp]=useState(false);
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const handleSubmit=()=>{
        console.log(password);
        console.log(userEmail);
    }



    



  return (
    <div className='w-screen h-screen relative overflow-hidden flex'>
        {/*BackGround Img*/}
        <img src={LoginBg} alt="BackGroundImg" className='w-full h-full object-cover absolute top-0 left-0' />
        {/*Main Content Here*/}
        <div className='flex flex-col m-auto items-center bg-slate-200 bg-opacity-25 w-[60%] h-[80%] z-10 backdrop-blur-md p-4 px-4 py-12 shadow md:shadow-lg rounded-md' >
            {/*Top Logo Section*/}
            <div className="flex items-center justify-start gap-4 w-full">
                <img src={Logo} className="w-8" alt="logo" />
                <p className="text-headingColor font-semibold text-sxl">City</p>
            </div>
            {/*Welcome Text Section*/}
            <p className="text-3xl font-semibold text-headingColor">Welcome Back</p>
            <br />
            <p className="text-s text-black -mt-1">{isSignUp ? "Sign Up " : "Sign In "}With The Following</p>
            <br />
            {/*Input Section*/}
            <div className='w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4'>
                <LoginInput placeholder={"Email Here"} icon={<FaEnvelope className="text-xl text-black" />} inputState={userEmail} inputStateFunc={setUserEmail} type="email" isSignUp={isSignUp}/>
          
                <LoginInput placeholder={"Password Here"} icon={<FaLock className="text-xl text-black" />} inputState={password} inputStateFunc={setPassword} type="password" isSignUp={isSignUp}/>
                
                {/*If the account does not exist then only this field is displayed*/}
                {isSignUp && (
                    <LoginInput placeholder={"Confirm Password Here"} icon={<FaLock className="text-xl text-black" />} inputState={confirmPassword} inputStateFunc={setConfirmPassword} type="password" isSignUp={isSignUp}/>
                )}

                {!isSignUp ? ( <p>Doesn't have an Account: {" "} <motion.button {...buttonClick} className="text-blue-800 underline cursor-pointer bg-transparent font-semibold" onClick={()=>setIsSignUp(true)}>Create One</motion.button></p>) :(<p>Already Have An Account:{" "} <motion.button {...buttonClick} className="text-blue-800 underline cursor-pointer bg-transparent font-semibold" onClick={()=>setIsSignUp(false)}>Sign-In Here</motion.button></p>)}

                {/*Button Section*/}
                <motion.button {...buttonClick} className="w-full px-4 py-2 rounded-md bg-blue-800 cursor-pointer text-white text-xl capitalize hover:bg-blue-600 transition-all duration-150"  onClick={handleSubmit}>{isSignUp ? "Sign Up " :"Sign-In "}</motion.button>


            </div>
            <div className=" mt-5 flex items-center justify-between gap-16">
                <div className="w-24 h-[1px] rounded-md bg-white"></div>
                <p className="text-white">or</p>
                <div className="w-24 h-[1px] rounded-md bg-white"></div>
            </div>

            {/*<motion.div {...buttonClick} className=" mt-5 flex items-center justify-center px-20 py-2 bg-slate-100 backdrop-blur-md cursor-pointer rounded-3xl gap-4" onClick={loginWithGoogle}><FcGoogle className="text-2xl" /><p className="capitalize text-base text-black">Sign-In With Google</p></motion.div>  */}


        </div>
    </div>
  )
}

export default Login