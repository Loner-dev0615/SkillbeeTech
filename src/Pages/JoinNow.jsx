import React, { useState } from 'react'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const JoinNow = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className='flex gap-0 bg-gray-300 mb-0 h-screen w-full'>
            <div className="bg-[#EE5822]   flex-col h-[275.25] w-2xl">
               <div className="mt-70 ml-55.75 items-center gap-2.75">
                 {isLogin ? (
                    <>
                        <h1 className='text-white text-4xl mb-4'>Login into your Skillbee Account</h1>
                        <p className='text-white'>Start your 5-min daily journey</p>
                    </>
                ) : (
                    <>
                        <h1 className='text-white text-4xl mb-4'>Join Skillbee</h1>
                        <p className='text-white'>Start your 5-min daily journey</p>
                    </>
                )}
               </div>
            </div>

           
            <div className='justify-center items-center flex flex-col gap-4 flex-1 overflow-y-auto border-96 p-3 border-gray-300 bg-white rounded-[150px]'>
                <div className='flex gap-0 bg-white rounded-md w-107 overflow-hidden text-center mb-4  '>
                    <button 
                        onClick={() => setIsLogin(true)}
                        className={`flex-1 py-3 font-semibold transition-all ${
                            isLogin 
                                ? 'bg-gray-400 text-black' 
                                : 'bg-white text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                        Login
                    </button>
                    <button 
                        onClick={() => setIsLogin(false)}
                        className={`flex-1 py-3 font-semibold transition-all ${
                            !isLogin 
                                ? 'bg-gray-400 text-black' 
                                : 'bg-white text-gray-500 hover:bg-gray-100'
                        }`}
                    >
                        Sign up
                    </button>
                </div>

                
                {isLogin && (
                    <>
                        <div className='flex flex-col gap-2 bg-white border p-2 rounded-md w-107 left-120px'>
                            <span className='text-gray-500'>Email</span>
                            <input type="text" className='' placeholder='alexjohnson@gmail.com' />
                        </div>

                        <div className='flex flex-col gap-2 bg-white border p-2 rounded-md w-107 left-120px'>
                            <span className='text-gray-500'>Password</span>
                            <div className='flex justify-between'>
                                <input type={showPassword ? "text" : "password"} className='' placeholder='XXXXXXXXXXXX' />
                                <span className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                </span>
                            </div>
                        </div>

                        <div className='flex items-center justify-between w-107'>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" />
                                <span className='text-gray-500'>Remember me</span>
                            </div>
                            <p className='text-blue-500 hover:underline cursor-pointer'>Forgot password?</p>
                        </div>

                        <a href="/dashboard" className="bg-[#EE5822] text-white py-2 px-4 rounded-[45px] w-107 left-120px border border-orange-500 hover:bg-transparent hover:text-orange-500 cursor-pointer text-center">Login</a>
                    </>
                )}

                {!isLogin && (
                    <>
                        <div className='flex flex-row gap-7 p-auto'>
                            <div className='flex flex-col gap-2 bg-white border p-2 rounded-md max-w-sm left-120px max-h-20'>
                                <span className='text-gray-500'>First name</span>
                                <input type="text" placeholder='Alex' />
                            </div>

                            <div className='flex flex-col gap-2 bg-white border p-2 rounded-md max-w-sm left-120px'>
                                <span className='text-gray-500'>Last name</span>
                                <input type="text" placeholder='Johnson' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 b   g-white border p-2 rounded-md w-107 left-120px'>
                            <span className='text-gray-500'>Email</span>
                            <input type="text" className='' placeholder='alexjohnson@gmail.com' />
                        </div>

                        <div className='flex flex-col gap-2 bg-white border p-2 rounded-md w-107 left-120px'>
                            <span className='text-gray-500'>Password</span>
                            <div className='flex justify-between'>
                                <input type={showPassword ? "text" : "password"} className='' placeholder='XXXXXXXXXXXX' />
                                <span className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                </span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 bg-white border p-2 rounded-md w-107 left-120px'>
                            <span className='text-gray-500'>Confirm Password</span>
                            <div className='flex justify-between'>
                                <input type={showConfirmPassword ? "text" : "password"} className='' placeholder='XXXXXXXXXXXX' />
                                <span className='cursor-pointer' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                </span>
                            </div>
                        </div>

                        <div className='flex items-center gap-2 mr-77'>
                            <input type="checkbox" />
                            <span className='text-gray-500'>Remember me</span>
                        </div>

                        <a href="/onboarding" className='bg-[#EE5822] text-white py-2 px-4 rounded-[45px] w-107 left-120px border border-orange-500 hover:bg-transparent hover:text-orange-500 cursor-pointer text-center'>Sign Up</a>
                    </>
                )}
            </div>
           
        </div>
    )
}

export default JoinNow