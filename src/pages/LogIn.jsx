import React from 'react'

const LogIn = () => {
    return (
        <div className='w-full pr-[2%] md:pr-[5%] mt-32 mb-14'>
            <div className='w-full h-fit flex fle-row items-center  justify-between'>
                {/* image */}
                <div className='hidden md:flex w-[50%] h-auto pt-[5%] items-center justify-start bg-[#CBE4E8]'>
                    <img src="/SignUp.png" alt="SignUp" className='w-full h-full object-contain' />
                </div>
                {/* Sign Up */}
                <div className='w-[80%] md:w-[45%] lg:w-[35%] h-auto flex flex-col gap-8 lg:gap-10 pl-4'>
                    <div className='w-full h-fit flex flex-col gap-8 lg:gap-12'>
                        <div className='w-fit h-fit flex flex-col gap-4 lg:gap-6'>
                            <h1 className='text-2xl md:text-4xl font-medium'>Log in to Exclusive</h1>
                            <p className='text-base font-normal'>Enter your details below</p>
                        </div>
                        <div className='w-full h-fit flex flex-col gap-6 lg:gap-10'>
                            {/* Email or Phone Number */}
                            <div className='w-full h-8 pb-2 border-b-2 border-black/30'>
                                <input
                                    type="text"
                                    placeholder='Email or Phone Number'
                                    className='w-full flex text-base font-normal border-none focus:outline-none'
                                />
                            </div>
                            {/* Password */}
                            <div className='w-full h-8 pb-2 border-b-2 border-black/30'>
                                <input
                                    type="text"
                                    placeholder='Password'
                                    className='w-full flex text-base font-normal border-none focus:outline-none'
                                />
                            </div>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className='w-full h-fit flex flex-row items-center justify-between'>
                        <button
                            className='w-32 h-14 flex items-center justify-center text-white rounded-md hover:bg-[#f19393] bg-[#DB4444]'>
                            Log In
                        </button>
                        <a
                            href="#"
                            className='flex items-center justify-center text-[#DB4444] hover:text-black hover:scale-105 transition-transform duration-300'>
                            Forget Password?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn