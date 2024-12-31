import React from 'react'

const SignUp = () => {
    return (
        <div className='w-full pr-[2%] md:pr-[5%] mt-32 mb-14'>
            <div className='w-full h-fit flex fle-row items-center  justify-between'>
                {/* image */}
                <div className='hidden md:flex w-[50%] h-auto pt-[5%] items-center justify-start bg-[#CBE4E8]'>
                    <img src="/SignUp.png" alt="SignUp" className='w-full h-full object-contain' />
                </div>
                {/* Sign Up */}
                <div className='w-[80%] md:w-[45%] lg:w-[35%] h-auto flex flex-col gap-8 lg:gap-12 pl-4'>
                    <div className='w-fit h-fit flex flex-col gap-4 lg:gap-6'>
                        <h1 className='text-2xl md:text-4xl font-medium'>Create an account</h1>
                        <p className='text-base font-normal'>Enter your details below</p>
                    </div>
                    <div className='w-full h-fit flex flex-col gap-6 lg:gap-10'>
                        <div className='w-full h-fit flex flex-col gap-6 lg:gap-10'>
                            {/* Name */}
                            <div className='w-full h-8 pb-2 border-b-2 border-black/30'>
                                <input
                                    type="text"
                                    placeholder='Name'
                                    className='w-full flex text-base font-normal border-none focus:outline-none'
                                />
                            </div>
                            {/* Email or phone number */}
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
                        {/* Create new account button */}
                        <div className='w-full h-fit flex flex-col gap-4'>
                            <button
                                className='w-full h-14 flex items-center justify-center text-white rounded-md hover:bg-[#f19393] bg-[#DB4444]'>
                                Create Account
                            </button>
                            {/* Sign up with Google */}
                            <div className='w-full h-fit flex flex-col items-center justify-center gap-5 lg:gap-8'>
                                <div className='w-full h-14 flex items-center justify-center border-2 border-black/30 rounded-md'>
                                    <a
                                        href=""
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='w-fit h-fit flex flex-row items-center justify-center gap-4 hover:scale-105 transition-transform duration-300'
                                    >
                                        <img src="/Google.png" alt="Google" className='w-6 h-6 object-contain' />
                                        <p className='text-base font-normal'>Sign up with Google</p>
                                    </a>
                                </div>
                                {/* Log in */}
                                <div className='w-fit h-7 py-1 flex flex-row items-center gap-4'>
                                    <p className='text-base font-normal'>Already have account?</p>
                                    <a
                                        href="#"
                                        className='text-base font-normal hover:text-[#DB4444] hover:scale-105 transition-transform duration-300'
                                    >Log in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp